<template>
  <article @mouseover="hoverMe" :style="computedStyle">
    {{number}}
  </article>
</template>

<script>
const borderStyle = '1px solid white'
  export default {
    data() {
      return {
        isHovered: false,
        borderStylesArray: [{
            borderLeft: borderStyle
          },{
            borderRight: borderStyle
          }, {
            borderTop: borderStyle
          }, {
            borderBottom: borderStyle
          }
        ]
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
        let BASE_COLOR = '#092acd',
            SECONDARY_COLOR = '#f2d22e',
            SWITCH_COLOR = false,
            FONT_SIZE_RANGE = 50

        if (SWITCH_COLOR) {
          let temp = SECONDARY_COLOR;
          SECONDARY_COLOR = BASE_COLOR;
          BASE_COLOR = temp;
        }

        let background = BASE_COLOR,
            color = 'white',
            fontSize = Math.random()*FONT_SIZE_RANGE + 'px',
            letterSpacing = Math.random() * 15 * (-1*(Math.round(Math.random()*2))) + 'px'

        let randomBorderStyle = this.borderStylesArray[Math.floor(Math.random()*4)];


        if (this.isHovered) {
          background = SECONDARY_COLOR;
          color = SECONDARY_COLOR;
        } else {
          background = BASE_COLOR;
          color = 'white';
        }
        return {
          background,
          color,
          fontSize,
          letterSpacing,
          ...randomBorderStyle
        }
      }
    }
  }

</script>
