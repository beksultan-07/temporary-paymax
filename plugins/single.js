import {Howl} from "howler";

export default ({ app, store }, inject) => {
  app.$single = {
    play(name) {
      const player = new Howl({
        src: `${app.$axios.defaults.baseURL}/storage/media/${name}.ogg`,
        html5: true,
        autoplay: false,
        loop: false,
        volume: 0.2,
        preload: false
      });
      player.play(0, false);
    }
  };
  inject('single', app.$single);
};
