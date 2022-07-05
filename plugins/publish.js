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
      clean: true
    }),
    subscribe(topic, channels, error) {

      // Connect broker client.
      this.client.on('connect', () => {
        console.log("Connect to a trading broker.");
      });
      this.client.subscribe(topic, {
        qos: 2
      }, (err) => {
        if (err) {
          error(`Error on topic subscribe: ${err}`);
        }
        console.log("Subscribe topic:", topic);
      });

      // Message broker client.
      this.client.on("message", (t, m, packet) => {
        if (!packet.qos || !m.byteLength) {
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

      // Reconnect broker client.
      this.client.on("reconnect", () => {
        console.log("Reconnecting to a trading broker.");
      });

      this.client.on("disconnect", (e) => {
        console.log("Disconnect to a trading broker.", e);
      });
    },
    unsubscribe(topic) {
      this.client.unsubscribe(topic, {qos: 2}, (err) => {
        if (err) {
          console.log(err);
        }

        ["connect", "reconnect", "disconnect", "message"].map((event) => {
          this.client.removeAllListeners(event);
        })
      });
      console.log("Unsubscribe topic:", topic);
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