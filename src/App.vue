<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
@font-face {
  font-family: Chee;
  src: url(./assets/fonts/Cheee_Variable.woff2);
}

.v-font {
  font-family: Chee;
  flex-basis: 70%;
  animation: v-weight 15s ease-in-out infinite;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@keyframes v-weight {
  0% {
        font-variation-settings: "temp" 212.88, "yest" 406.21, "grvt" 969.03;
  }
  30% {
        font-variation-settings: "temp" 735.66, "yest" 119.52, "grvt" 846.11;
  }
  50% {
        font-variation-settings: "temp" 160.74, "yest" 1000, "grvt" 27.27;
  }
  70% {
        font-variation-settings: "temp" 735.66, "yest" 119.52, "grvt" 846.11;
  }  
  100% {
        font-variation-settings: "temp" 212.88, "yest" 406.21, "grvt" 969.03;
  }
  
}
</style>
