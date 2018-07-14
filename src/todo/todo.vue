<template>
    <section class="real-app">
      <input
        type="text"
        class="add-input"
        autofocus="autofocus"
        placeholder="接下去要做什么"
        @keyup.enter="addTodo"
      >
      <Item
        :todo="todo"
        v-for="(todo,index) in filtersTodos"
        :key="index"
        @del="deleteTodo"
        @edit="editTodo"
        @unEdit="unEditTodo"
      ></Item>
      <Tabs
        :filter="filter"
        :todos="todos"
        @toggle="toggleFilter"
        @clearAllCompleted="clearAllCompleted"
      ></Tabs>
    </section>

</template>

<script>
  import Item from './item.vue'
  import Tabs from './tabs.vue'
    export default {
        data() {
            return {
              todos:[],
              filter:'all',
            }
        },
        computed: {
          filtersTodos(){
            if(this.filter==='all'){
              return this.todos
            }
            const completed=this.filter==='completed';
            return this.todos.filter(todo=>completed===todo.completed);
          }
        },
        components: {
          Item,
          Tabs
        },
        watch:{
          todos:{
            handler() {
              window.localStorage.setItem("content", JSON.stringify(this.todos));
            },
            deep: true  //保证监听数组内部值的变化
          }
        },
        methods: {
          editTodo(todo) { //使添加的todo可编辑
            todo.isEditing = true;
          },
          unEditTodo(todo) { //使添加的todo不可编辑
            todo.isEditing = false
          },
          addTodo(e){
            if(!e.target.value){
              return false
            };
            this.todos.unshift({
              content:e.target.value.trim(),
              isEditing: false, //是否在编辑状态
              completed:false
            });
            e.target.value='';
            window.localStorage.setItem("content", JSON.stringify(this.todos));
          },
          deleteTodo(todo){
            this.todos.splice(
              this.todos.findIndex(todo=>todo===todo),1
            );
//            this.localSt=window.localStorage.setItem("content", JSON.stringify(this.todos));
          },
          toggleFilter(state){
            this.filter=state;
          },
          clearAllCompleted(){
            this.todos=this.todos.filter(todo=>!todo.completed);
//            this.localSt=window.localStorage.setItem("content", JSON.stringify(this.todos));
          }
        },
      created() {
        let myStorage = window.localStorage.getItem('content');
        this.todos = JSON.parse(myStorage) || [] //因为todoLists初始值是null,使用或运算符，如果为null设为空数组
      }
    }
</script>

<style scoped>
.real-app{
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}
  .add-input{
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    outline: none;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-smoothing: antialiased;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }
</style>
