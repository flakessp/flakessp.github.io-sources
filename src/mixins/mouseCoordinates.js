import _ from 'lodash'

export const MOUSE_COORDINATES = {  
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    }
  }, methods: {
      getMouseCoordinates: _.debounce(function (event) {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }, 15)
  }
}