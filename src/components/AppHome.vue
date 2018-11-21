<template>
  <div class="container">
    <router-link to="/">home</router-link>
    <router-link to="/1">DLT THIS</router-link>
    <router-link to="/2">КОШКА</router-link>
    <router-link class="v-font" to="/3">Variative Fonts</router-link>
    <router-link to="/4">🥗SÅḺÀⅅ̲𝓓ȧȳŚ👀</router-link>
    <router-link to="/howtomakewebsites">🌍а все таки, как же делать сайты?🤔</router-link>
    <router-link to="7" class="big">🔵</router-link>
  </div>
</template>

<script>
// import Blob from './RandomFifth.vue'

export default {
  
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  font-size: 50px;
  text-decoration: none;
  padding: 30px;
  color: black;
  box-shadow: 3px 3px 0px 6px black;
  margin: 30px;
}

.container {
  display: flex;
  flex-flow: wrap;
}

.big {
  font-size: 100px;
  box-shadow: none;
  background: pink;
}

</style>
