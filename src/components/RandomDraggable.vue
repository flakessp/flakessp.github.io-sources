<template>
  <div class="container">
    <draggable-element v-for="(item, index) in draggableElementsArray" :key="item" @destroy="removeElement(index)"> {{item}}</draggable-element>
    <add-new-element @elementAdded="addNewElement"></add-new-element>
  </div>  
</template>

<script>

import draggableElement from './RandomDraggableItem'
import addNewElement from './RandomDraggableButton'

export default {
  data() {
    return {
      draggableElementsArray: []
    }
  },
  methods: {
    addNewElement(element) {
      this.draggableElementsArray.push(element);
    },
    removeElement(id) {
      this.draggableElementsArray.splice(id, 1);
    }
  },
  components: {
    draggableElement,
    addNewElement
  }
  // todo: 1. multiple instances 
  // 2. destroy on close button click
  // 3. preserve dimensions of container
  // 4. button for more
}
  
</script>

<style scoped>
.container {
  position: relative;
  height: 100vh;
  background: mistyrose;
}
</style>
