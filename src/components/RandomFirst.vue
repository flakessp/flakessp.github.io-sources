<template>
  <div>
    <div class="container" @click="changeImage" @mousemove="getMouseCoordinates">
      <div class="img-wrapper"><img :src="selectedImage" alt=""></div>
      <h2>т.а.: а ты о чем думаешь</h2>
    </div>

    <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feMorphology operator="dilate" radius="4 4" in="SourceAlpha" result="morphology" />
      <feFlood flood-color="#30597E" flood-opacity="1" result="flood" />
      <feComposite in="flood" in2="morphology" operator="in" result="composite" />
      <feComposite in="composite" in2="SourceAlpha" operator="out" result="composite1" />
      <feTurbulence type="fractalNoise" :baseFrequency="baseFrequency" numOctaves="1" seed="0" stitchTiles="stitch" result="turbulence" />
      <feDisplacementMap in="composite1" in2="turbulence" :scale="feDisplacementMapScale" xChannelSelector="A" yChannelSelector="A" result="displacementMap" />
      <feMerge result="merge">
        <feMergeNode in="SourceGraphic" result="mergeNode" />
        <feMergeNode in="displacementMap" result="mergeNode1" />
      </feMerge>
    </filter>
    
    <filter id="filter2" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
      <feTurbulence type="turbulence" baseFrequency="0.01 0.05" numOctaves="2" seed="2" stitchTiles="noStitch" result="turbulence"/>
      <feDisplacementMap in="SourceGraphic" in2="turbulence" :scale="filter2" xChannelSelector="G" yChannelSelector="A" result="displacementMap"/>
  </filter>

  </div>
</template>

<script>
  import { IMAGES } from '../data/secretGirlNameImages.js'
  import { MOUSE_COORDINATES } from '../mixins/mouseCoordinates'

  export default {
    data() {
      return {
        selectedImageIndex: 0,
        images: IMAGES,
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
      },
      baseFrequency() {;
        return '0.01 ' + this.mouseX / 11000;
      },
      feDisplacementMapScale() {
        return 40;
      },
      filter2 () {
        return this.mouseY/10;
      }
    },
    mixins: [MOUSE_COORDINATES]
  }

</script>

<style lang="css" scoped>
  .img-wrapper {
    padding: 50px;
    margin: 0 30px;
    border: 5px solid black;

    filter: url(#filter2)
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
    mix-blend-mode: hard-light;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 7vw;
    filter: url(#filter);
    transform: translate(-50%, -50%);
    transition: filter .5s;
  }

</style>
