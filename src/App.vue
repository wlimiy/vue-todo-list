<template>
  <div id="app">
<Header></Header>
    <Todo></Todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './todo/header.vue'
import Footer from './todo/fooer.jsx'
import Todo from './todo/todo.vue'
  export default {
    components:{
      Header,
      Footer,
      Todo
    }
  }
</script>
<style>
#app{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
  #cover{
    position: absolute;
    background-color: #999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 9;
    z-index: -1;
  }
</style>


