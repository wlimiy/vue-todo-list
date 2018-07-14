![项目图片](https://github.com/wlimiy/vue-todo-list/blob/master/src/assets/images/pic.png)
# vue-todos

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
### 参考慕课网搭建
https://www.imooc.com/learn/935
https://github.com/smyhvae/vue-todo
#### localStorage用法总结
* 设置值
```
localStorage.setItem(key,value)
```
如果key的value存在，则为更新key的值。
* 获取值
```
localStorage.getItem(key)
```
如果key的value不存在时，返回null
* 清除值
```
localStorage.remove(key);
localStorage.clear();//表示清除localStorage存储的所有数据
```
* JSON存储

当需要存储的数据很多时，可以将数据存储到数组中并转换成JSON格式的数据。
```
JSON.stringify(data) 将对象转换成JSON格式的数据串。
JSON.parse(data)将数据解析成对象并返回解析后的对象。
var arr = {"name":"moomoo","age":2,"eat":"apple"};
localStorage.setItem("arr",JSON.stringify(arr));
arr = JSON.parse(localStorage.getItem("arr"));
```
* localStorage是window上的方法
#### todo利用localstorge做本地化存储
* 在添加todo方法中使用localStorage以JSON格式存储数据
```
window.localStorage.setItem("content", JSON.stringify(this.todoLists))
```
* 在created函数中设置todoList初始值。如果localStorage没有存值，则设置todoList初始值是空。
* created这个钩子函数在实例被创建之后被调用。
* created函数中调用ajax获取页面初始化所需要的数据
```
created() {
    let myStorage = window.localStorage.getItem('content');
    this.todoLists = JSON.parse(myStorage) || [] //因为todoLists初始值是null,使用或运算符，如果为null设为空数组
}
```
* 设置watch属性，侦听todoList值的变化
```
watch: {
    todoList: {
        handler() {
            localStorage.setItem('todoList', JSON.stringify(this.todoList))
        },
        deep: true  //保证监听数组内部值的变化
    }
},
```
