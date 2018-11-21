<template>
  <div class="container">
    <section v-for='item in 10' :key="item">
      <box  v-for="x in 10" :key="x"  :number='(item-1)*10+x-1'/>
    </section>
  </div>
</template>
<script>
import box from './Random7_Box'

  export default {
    components: {
      box
    }
  }
</script>

<style>
  .container {
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
  }

</style>
