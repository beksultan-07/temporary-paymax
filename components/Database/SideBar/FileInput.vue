<template>
  <div class="file-input">
    <label v-if="!fileName" for="photo" class="label">
      <v-icon x-large>mdi-upload</v-icon>
    </label>
    <label v-else for="photo"><img :src="image" alt=""> </label>
    <input type="file" name="photo" id="photo" class="d-none" @change="file">
  </div>
</template>

<script>
  export default {
    name: 'v-component-file-input',
    data: () => ({
      fileName: null,
      image: ''
    }),
    methods: {
      file(e) {
        let name = e.target.files[0]?.name;
        console.log(e);
        if(!name) return;

        this.image = URL.createObjectURL(e.target.files[0])

        if(name.length > 25) {
          name = name.slice(0, 20) + "..." + name.slice(-10)
        }

        this.fileName = name
      }
    }
  }
</script>

<style lang="scss" scoped>
.file-input label {
  border: 1px solid #9C9C9C;
  border-radius: 4px;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.label {
  position: relative;

  &::after {
    content: 'Прикрепите фото';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 400;
    color: #9C9C9C;
  }
}
</style>