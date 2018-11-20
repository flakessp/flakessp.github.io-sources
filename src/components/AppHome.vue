<template>
  <div class="hello">
    <router-link to="/">home</router-link>
    <router-link to="/1">DLT THIS</router-link>
    <router-link to="/2">КОШКА</router-link>
    <router-link to="/3">VRTV</router-link>
    <router-link to="/4">🥗SÅḺÀⅅ̲𝓓ȧȳŚ👀</router-link>
    <router-link to="/howtomakewebsites">🌍а все таки, как же делать сайты?🤔</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
}

</style>
