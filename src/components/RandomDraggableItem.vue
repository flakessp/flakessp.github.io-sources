<template>
    <div class="draggable" v-draggable>
      <h1>
        <slot></slot>
      </h1>
      <div class="button--destroy" @click="destroyItem">x</div>
  </div>
</template>

<script>
  import { Draggable } from 'draggable-vue-directive'

  export default {
    directives: {
      Draggable
    },
    methods: {
      destroyItem() {
        this.$emit('destroy');
      }
    }, 
    props: ['id'],
    mounted () {
      console.log(this.id)
    }
  }
</script>

<style scoped>
.draggable {
  padding: 30px;
  background: white;
  position: absolute;
  top: 100px;
  left: 100px;
  border: 1px solid black;
  user-select: none;
  cursor: -webkit-grab;
  box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.3);
}
.button--destroy {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  background: red;
  border-radius: 15px;
  cursor: pointer;
  color: red;
}

.button--destroy:hover {
  color: white;
}
</style>
