<template>
  <div class="random-second" @mousemove="getMouseCoordinates">
    <h1>{{title}}</h1>
    <img src="http://placekitten.com/200/300" alt="" :style="computedImgStyles">
    <p>
      x: {{x}} y: {{y}}
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'картинка следующая за курсором',
        x: 0,
        y: 0
      }
    }, methods: {
      getMouseCoordinates: function (event) {
        this.x = event.clientX;
        this.y = event.clientY;
      }
    }, computed: {
      computedImgStyles: function () {
        return {
          top: this.y + 'px',
          left: this.x + 'px'
        }
      }
    }
  }
</script>

<style scoped>
.random-second {
  min-height: 100vh;
  position: relative;
}

img {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
