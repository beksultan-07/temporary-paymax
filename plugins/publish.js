import mqtt from 'mqtt';

export default ({ app, store, route }, inject) => {
  app.$publish = {
    message: [],
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

      if (this.client['_events'].message) {
        switch (route.name) {
          case 'trade-exchange':
            if (this.client['_events'].message.length === 14) {
              this.client['_events'].message.splice(0, 14)
            }
            break
        }
      }

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