<template>
<div>
  <div class="container" @click="changeImage">
    <div><img :src="selectedImage"  alt=""></div>
    <div>
      <h2>: А ты о чем думаешь</h2>
    </div>
  </div>
</div>

<!-- анимация набора текста, ховеры -->
</template>

<script>
import { IMAGES } from '../data/secretGirlNameImages.js'

  export default {
    data() {
      return {
        selectedImageIndex: 0,
        images: IMAGES
      }
    }, 
    methods: {
      changeImage() {
        this.selectedImageIndex++;
        if(this.selectedImageIndex === this.images.length) this.selectedImageIndex = 0;
      }
    },
    computed: {
      selectedImage() {
        return this.images[this.selectedImageIndex];
      }
       
// 
// 
// 
// 
// 
// 
    }
  }
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between
}
</style>
