<template>
  <div>
    <button @click.prevent="addNewElement">{{counter}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addNewElement() {
      this.$emit('elementAdded', this.counter);
      this.counter ++;
    }
  }
}
</script>