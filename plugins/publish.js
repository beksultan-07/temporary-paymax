import mqtt from 'mqtt';

export default ({ app, store }, inject) => {
  app.$publish = {
    client: mqtt.connect(process.env.BASE_BROKER || 'ws://localhost:15675/ws', {
      clean: true
    }),
    subscribe(topics, error) {
      this.client.on('connect', () => {
        this.client.subscribe(topics, {qos: 1}, (err) => {
          if(err) {
            error(`Error on topic subscribe: ${err}`);
          }
        });
      });
    },
    unbind(topic) {
      this.client.publish(topic, null, {qos: 1});
    },
    bind(topic, callback) {
      this.client.on('message', (t, m, packet) => {
        if (!packet.qos || !m.byteLength) {
          return;
        }
        if (topic === t) {
          callback(JSON.parse(m.toString()));
        }
      });
    }
  };
  app.$publish.client.setMaxListeners(100);
  inject('publish', app.$publish);
};
