<template>
  <div :style="styleObject" class="live-image-loader" @click="dispatchImageSelector">
      <input ref="fileDispatcher" class="live-image-loader__dispatcher" @change="reloadImage" type="file" />
      <img class="live-image-loader__image" src="#" ref="image" />
  </div>
</template>
<script>
export default {
    props: ['atChange', 'width', 'height'],
    data() {
        return {
            image: ''
        }
    },
    computed: {
        styleObject() {
            return {
                width: this.width,
                height: this.height,
                background: 'grey',
                backgroundImage: this.image
            }
        }
    },
  methods: {
      dispatchImageSelector() {
          this.$refs.fileDispatcher.dispatchEvent(new MouseEvent('click'))
      },
      reloadImage(e) {
          let file = e.target.files[0]
          const imgTag = this.$refs.image

          var reader = new FileReader();

            this.atChange(file, () => {
                debugger
                reader.onload = function (e) {
                    console.log('Dibujando imagen');
                    
                    imgTag.setAttribute('src', e.target.result)
                }
    
                reader.readAsDataURL(file);
            })
      }
  }
}
</script>

<style lang="scss">
.live-image-loader {
    border: 1px solid;
    cursor: pointer;
    &__image {
        &:not([src="#"]) {
            object-fit: cover;
            height: 100%;
        }
        &[src="#"] {
            display: none;
        }
    }
    &__dispatcher {
        display: none;
    }
}
</style>
