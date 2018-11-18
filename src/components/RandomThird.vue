<template>
  <div>
    <h1>вариативные свойства</h1>
    <div class="container">
      <section>
        <h2 :style="computedStyles.letterSpacing" >letter-spacing</h2>
        <input type="range" name="" id="" min="0" max="30" step="1" v-model="letterSpacing">
      </section>
      <section style="text-align: left;">
        <code>
          style { <br>
          &nbsp;letter-spacing: {{letterSpacing}}px<br>
          }
        </code>
      </section>
    </div>
    <div class="container">
      <section>
        <h2 :style="computedStyles.fontSize" >font-size</h2>
        <input type="range" name="" id="" min="14" max="50" step="1" v-model="fontSize">
      </section>
      <section style="text-align: left;">
        <code>
          style { <br>
          &nbsp;font-size: {{fontSize}}px<br>
          }
        </code>
      </section>      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        letterSpacing: 0,
        fontSize: 14
      }
    }, computed: {
      computedStyles: function() {
        return {
            letterSpacing: {
              letterSpacing: this.letterSpacing + 'px'
            }, fontSize: {
              fontSize: this.fontSize + 'px'
            }
          }
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    padding: 30px;
  }
  .container section {
    border: 1px solid black;
    padding: 15px;
    flex-basis: 40%;
    box-shadow: 5px 10px black;
    height: fit-content;
  }
  code {
    text-align: left;
  }
</style>
