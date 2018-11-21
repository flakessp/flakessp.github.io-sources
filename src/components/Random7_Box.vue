<template>
  <article @mouseover="hoverMe" :style="computedStyle">
    {{number}}
  </article>
</template>

<script>
  export default {
    data() {
      return {
        isHovered: false
      }
    },
    methods: {
      hoverMe() {
        this.isHovered = !this.isHovered;
      }
    },
    props: [
      'number'
    ],
    computed: {
      computedStyle() {
        let background = 'none',
          color = 'blue';
        if (this.isHovered) {
          background = 'blue';
          color = 'blue';
        } else {
          background = 'none';
          color = 'black';
        }
        return {
          background,
          color
        }
      }
    }
  }

</script>
