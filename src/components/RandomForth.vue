<template>
  <div class="container" @click="clickMe">
    
      <salad-over v-for="item in 4" :key="item"></salad-over>
      <figure>
      <div class="open--center"></div>
      </figure>
    
    <!-- <canvas-image v-else></canvas-image> -->
  </div>
  
</template>

<script>
import saladOver from './randomForthSection.vue'
import gyro from './randomForthGyro.vue'
import canvasImage from './AppSaladDays_2.vue'

  export default {
    components: {
      saladOver,
      gyro,
      canvasImage
    },
    data() {
      return {
        clicked: false,
        backgroundSize: 'contain',
        scale: 1,
        speed: Math.random() * 20
      }
    },methods: {
      clickMe() {
        this.clicked = !this.clicked;
      }
    }, computed: {
      computedStyle() {
        return {
          backgroundSize: {
            backgroundSize: this.backgroundSize,
            transform: `scale(${this.scale})`
          },
          scale: {
            transform: `scale(${this.scale})`
          },
        }
      }
    }
  }
</script>

<style scoped>
.container {
  display: flex;
  position: relative;
}
figure, .open--center {
  position: absolute;
  top: 50%;
  height: 50%;  
  width: 50vw;
  height: 50vh;
  /* height: 50vh; */
  background:url(../assets/3/open.svg) no-repeat center;
  background-size: contain;
  transform: translate(50%, -50%);
  animation: rotate 10s linear infinite;
  transform-origin: center;
}
figure {
  background-size: contain;
}
.open--center {
  width: 50%;
  height: 50%;
  animation: rotate 5s infinite reverse;
  background-image: url(../assets/3/opening-02-01.svg);
}
@keyframes rotate {
  from{
     transform: translate(50%, -50%) rotate(0);
  }
  to{
    transform: translate(50%, -50%) rotate(360deg);
  }
}
</style>
