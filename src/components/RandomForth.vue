<template>
  <div class="container">
    <section>
    </section>
    <section>
    </section>
    <section>
    </section>
    <section>
    </section>        
    <figure>
      <div class="open--center"></div>
    </figure>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
}
section {
  flex-basis: 25%;
  height: 100%;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background:url(../assets/3/os_movie_cover.svg) repeat-y 0 / auto 100%;
	animation: salad 10s linear infinite ;
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
.open--center {
  width: 50%;
  height: 50%;
  animation: rotate 5s infinite reverse;
  background-image: url(../assets/3/opening-02-01.svg);
}
section:nth-child(1) {
  animation-duration: 10s   
}
section:nth-child(2) {
    animation-duration: 15s
}
section:nth-child(3) {
    animation-duration: 20s
}
section:nth-child(4) {
    animation-duration: 8s
}
@keyframes salad {	
  from{background-position: 0 0;}
	to{background-position: 0 100vh;}
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
