<template>
    <div :class="['list-item',todo.completed?'completed':'']">
      <input
        type="checkbox"
        class="toggle"
        v-model="todo.completed"
      >
      <label  @dblclick="editTodo" v-show="!todo.isEditing">{{todo.content}}</label>
      <input type="text" class="content_todoList_main main_input"
             v-model="todo.content"
             v-show="todo.isEditing"
             @blur="unEditTodo"
      />
      <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
              type:Object,
              required:true
            }
        },
        computed: {},
        components: {},
        methods: {
          deleteTodo(){
            this.$emit('del',this.todo)
          },
          editTodo(){
            this.$emit('edit',this.todo)
          },
          unEditTodo(){
            this.$emit('unEdit',this.todo)
          }
        }
    }
</script>

<style scoped lang="less">
  .list-item {
    position: relative;
    background-color: #fff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  &:hover {
  .destory:after {
    content: '×';
  }
  }
  // item 的文字部分的样式
     label {
       white-space: pre-line;
       word-break: break-all;
       padding: 15px 60px 15px 15px;
       margin-left: 45px;
       display: block;
       line-height: 1.2;
       transition: color 0.4s;
     }
  &.completed {
  label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
  }
  }
  .toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    -webkit-appearance:none;
    appearance: none;
    outline: none;
  &:after {
     content: url('../assets/images/round.svg'); // item左侧图标的圆圈
   }
  &:checked:after {
     content: url('../assets/images/done.svg'); // item左侧图标的对勾
   }
  }
  .destory {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
  }
  .content_todoList_main {
    flex: 1;
    text-align: left;
    margin-left: 50px;
    font-size: 20px;
    padding: 6px 0;
  }

  .main_input {
    position: relative;
    z-index: 1;
  }
</style>
