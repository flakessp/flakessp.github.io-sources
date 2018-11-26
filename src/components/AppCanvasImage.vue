<template>
  <div id="container">
    <h1>хелло ворлд</h1>
  </div>  
</template>
<script>
import p5 from 'p5'
import image from '../assets/me/me.jpg'

  export default {
    mounted() {
      const imageP5 = new p5(function (sketch) {
        const blendModes = [sketch.DIFFERENCE, sketch.OVERLAY, sketch.HARD_LIGHT, sketch.SOFT_LIGHT];
        let img;
        let prevX;
        let prevY;

        sketch.setup = function () {
          const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
                    canvas.parent('container');
          img = sketch.loadImage(image);
        }

        sketch.draw = function() {
          // BEST RESULTS: OVERLAY | DIFFRENECE | HARD_LIGHT | SOFT_LIGHT
          sketch.blendMode(blendModes[Math.floor(Math.random()*blendModes.length)]);

          if (prevX !== sketch.mouseX && prevY !== sketch.mouseY ) {
            sketch.image(img, sketch.mouseX, sketch.mouseY, img.width/2, img.height/2);
          }
          prevX = sketch.mouseX; 
          prevY = sketch.mouseY;
        }
      })
    }
  }
</script>
<style scoped>
@font-face {
  font-family: xstm;
  src: url(../assets/fonts/cstm.woff);
}
h1 {
  font-family: 'xstm';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 9vw;
  letter-spacing: 10px;
  z-index: 1;
  color: white;
  margin: 0;
  padding: 0;
  mix-blend-mode: difference;
}

</style>
