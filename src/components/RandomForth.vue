<template>
  <div class="container" @click="clickMe">
    <div v-if="clicked">
      <salad-over v-for="item in 4" :key="item"></salad-over>
      <figure>
      <div class="open--center"></div>
      </figure>
    </div>
    <canvas-image v-else></canvas-image>
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
      clicMe() {
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
    }, mounted () {
      // Position Variables
// var x = 0;
// var y = 0;

// // Speed - Velocity
// var vx = 0;
// var vy = 0;

// // Acceleration
// var ax = 0;
// var ay = 0;

// var delay = 10;
// var vMultiplier = 0.01;

// window.ondevicemotion = function(event) {
// 		ax = event.accelerationIncludingGravity.x;
// 		ay = event.accelerationIncludingGravity.y;
// 		console.log("Accelerometer data - x: " + event.accelerationIncludingGravity.x + " y: " + event.accelerationIncludingGravity.y + " z: " +event.accelerationIncludingGravity.z); 
// 	}

// 	setInterval(function() {
// 		vy = vy + -(ay);
// 		vx = vx + ax;

// 		var ball = document.querySelector("figure");
// 		y = parseInt(y + vy * vMultiplier);
// 		x = parseInt(x + vx * vMultiplier);
		
// 		if (x<0) { x = 0; vx = 0; }
// 		if (y<0) { y = 0; vy = 0; }
// 		if (x>document.documentElement.clientWidth-200) { x = document.documentElement.clientWidth-200; vx = 0; }
// 		if (y>document.documentElement.clientHeight-100) { y = document.documentElement.clientHeight-100; vy = 0; }
		
// 		ball.style.top = y + "px";
// 		ball.style.left = x + "px";
// 	}, delay);

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
