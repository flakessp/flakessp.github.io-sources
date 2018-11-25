<template>
  <div>
    <section>
      <div id="container">
      </div>
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="linearRGB">
          <feTurbulence type="turbulence" baseFrequency="0.02 0.04" numOctaves="2" seed="1" stitchTiles="noStitch"
            result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="15" xChannelSelector="G" yChannelSelector="A"
            result="displacementMap" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
  import p5 from 'p5';
  export default {
    mounted() {

      const vueP5 = new p5(function (sketch) {

        let strokeIndex = 0;
        let index = 0;
        let book;
        let prevx, prevy;

        sketch.setup = function () {
          const canvas = sketch.createCanvas(255, 255);
          sketch.background(255);
          canvas.parent('container');
          sketch.loadJSON('http://localhost:3000/books', sketch.gotDrawing);
        };

        sketch.gotDrawing = function (data) {
          sketch.background(255); //canvas reset
          book = data.drawing;
        }

        sketch.draw = function () {
          if (book) {
            let x = book[strokeIndex][0][index];
            let y = book[strokeIndex][1][index];
            sketch.stroke(0);
            sketch.strokeWeight(3);
            sketch.point(x, y);
            if (prevx !== undefined) {
              sketch.line(prevx, prevy, x, y);
            }
            index++;
            if (index >= book[strokeIndex][0].length) {
              strokeIndex++;
              prevx = undefined;
              prevy = undefined;
              index = 0;
              if (strokeIndex === book.length) {
                book = undefined;
                strokeIndex = 0;
                setTimeout(() => sketch.loadJSON('http://localhost:3000/books', sketch.gotDrawing), 500);
              }
            } else {
              prevx = x;
              prevy = y;
            }
          }
        };
      });

    }
  }

</script>

<style scoped>
  svg {
    display: none;
  }

  section {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: darkorange;
    ;

  }

  #container {
    padding: 50px;
    border: 5px solid black;
    background: white;

    filter: url(#filter)
  }

  canvas {
    filter: url(#filter)
  }

</style>
