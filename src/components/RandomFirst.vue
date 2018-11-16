<template>
<div>
  <div class="container">
    <div class="row-half"><img src="../assets/DSC01997.jpg" alt=""></div>
    <div class="row-half p20">
      <h2>тоня: А ты о чем думаешь</h2>
    </div>
  </div>
</div>

<!-- анимация набора текста, ховеры -->
</template>

<style lang="css" scoped>
img {
  max-width: 100%;
}
img:hover {

}
.p20 {
  padding: 20px;
}
.container {
  display: flex;
  background: black;

  color: white;
}
.row-half {
  flex-basis: 50%;
  border: 5px solid white;
  /* background:#ABAAB6; */
  margin: 20px;
  text-align: left;
  /* padding: 15px; */
}
h2 {
  font-size: 150px;
}
</style>
