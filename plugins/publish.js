import mqtt from 'mqtt';
import Vue from 'vue';

export default ({ app }, inject) => {
  let event = new Vue();
  app.$publish = {
    route: null,
    client: mqtt.connect(process.env.BASE_BROKER || 'ws://localhost:15675/ws', {
      clean: true
    }),
    subscribe(topic, channels, error) {
      this.client.on('connect', () => {
        this.client.subscribe(topic, {qos: 1}, (err) => {
          if(err) {
            error(`Error on topic subscribe: ${err}`);
          }
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
        });
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