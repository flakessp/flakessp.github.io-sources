<template>
  <div>
    <div class="container" @click="changeImage">
      <div class="img-wrapper"><img :src="selectedImage" alt=""></div>
        <h2>: А ты о чем думаешь</h2>
    </div>
    <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
      color-interpolation-filters="linearRGB">
      <feMorphology operator="dilate" radius="4 4" in="SourceAlpha" result="morphology" />
      <feFlood flood-color="#30597E" flood-opacity="1" result="flood" />
      <feComposite in="flood" in2="morphology" operator="in" result="composite" />
      <feComposite in="composite" in2="SourceAlpha" operator="out" result="composite1" />
      <feTurbulence type="fractalNoise" :baseFrequency="`0.01 ${Math.random()}`" numOctaves="1" seed="0" stitchTiles="stitch" result="turbulence" />
      <feDisplacementMap in="composite1" in2="turbulence" :scale="Math.random()*100" xChannelSelector="A" yChannelSelector="A" result="displacementMap" />
      <feMerge result="merge">
        <feMergeNode in="SourceGraphic" result="mergeNode" />
        <feMergeNode in="displacementMap" result="mergeNode1" />
      </feMerge>
    </filter>
  </div>

  <!-- анимация набора текста, ховеры -->
</template>

<script>
  import {
    IMAGES
  } from '../data/secretGirlNameImages.js'

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
        if (this.selectedImageIndex === this.images.length) this.selectedImageIndex = 0;
      }
    },
    computed: {
      selectedImage() {
        return this.images[this.selectedImageIndex];
      }
    }
  }

</script>

<style lang="css" scoped>
.img-wrapper {
    padding: 50px;
    margin: 0 30px;
    border: 5px solid black;
}
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    user-select: none;
  }
  img {
    max-width: 70%;
    max-height: 70vh;
  }

  h2 {
    color: white;
    mix-blend-mode: difference;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 7vw;
    filter: url(#filter);
    transform: translate(-50%, -50%);
  }

</style>
