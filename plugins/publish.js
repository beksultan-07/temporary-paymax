import mqtt from 'mqtt';
import Vue from 'vue';

/**
 * @param app
 * @param inject
 * @returns {boolean}
 */
export default ({ app }, inject) => {
  let event = new Vue();

  app.$publish = {
    client: mqtt.connect(process.env.BASE_BROKER || 'ws://localhost:15675/ws', {
      clean: true,
      reschedulePings: false,
      queueQoSZero: false
    }),
    subscribe(topic, channels, error) {

      // Connect broker client.
      this.client.on('connect', () => {
        this.client.subscribe(topic, {
          qos: 0
        }, (err) => {
          if(err) {
            error(`Error on topic subscribe: ${err}`);
          }
          console.log('Connect to a trading broker.');
        });
      });

      // Reconnect broker client.
      this.client.on("reconnect", () => {
        console.log('Reconnecting to a trading broker.');
      });

      // Message broker client.
      this.client.on("message", (t, m, packet) => {
        if (!m.byteLength) {
          return;
        }
        if (topic === t) {
          let bytea = JSON.parse(m.toString());
          channels.map((channel) => {
            if (channel === bytea.channel) {
              event.$emit(channel, JSON.parse(bytea.data));
            }
          });
        }
      });
    },
    unbind(channels) {
      channels.map((channel) => {
        event.$off(channel);
      });
    },
    bind(channel, callback) {
      if (typeof callback !== "function") {
        return false
      }

      event.$on(channel, callback);
    }
  };
  app.$publish.client.setMaxListeners(50);
  inject('publish', app.$publish);
};