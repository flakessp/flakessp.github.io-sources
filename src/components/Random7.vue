<template>
  <div class="container" :style="computedStyles">
    <section v-for='item in 10' :key="item">
      <box  data-splitting v-for="x in 10" :key="x"  :number='(item-1)*10+x-1'/>
    </section>
    <link :href="_fontHref" rel="stylesheet">
  </div>
</template>
<script>
// import Splitting from 'splitting'
import box from './Random7_Box'

  export default {
    data() {
      return {
        FONT_NAME: 'Source Sans Pro',
      }
    },
    components: {
      box
    }, 
    computed: {
      _fontHref() {
        return 'https://fonts.googleapis.com/css?family=' + this.FONT_NAME.split(' ').join('+');
      },
      computedStyles() {
        return {
          fontFamily: this.FONT_NAME
        }
      }
    }, mounted() {
    }
  }
</script>

<style scoped>
  .container {
    font-family: 'Sarala', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  section, article {
    /* border: 1px solid black; */
  }

  section {
    height: 10%;
    display: flex;
  }

  article {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: none;
  }

</style>
