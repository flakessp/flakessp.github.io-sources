<template>
  <div class="container">
    <section class="left">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </section>
    <section class="right">
    </section>
  </div>
</template>

<style scoped>
@font-face {
  font-family: dejavu;
  src: url(../assets/fonts/DejaVuSans.woff);
}
  .container {
    font: 14px dejavu;
    color: white;
    display: flex;
    min-height: 100vh;
  }
  .container > section {
    width: 50%;
  }
  .left {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .right {
    background: white;
  }
</style>

<script>
  // проект на сетке поделенной на две части
</script>