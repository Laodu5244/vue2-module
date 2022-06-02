
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- 添加一个自定义事件@addTodo -->
      <header-module @addTodo="addTodo" />
      <list-module :todos="todos" />
      <footer-module
        :todos="todos"
        @checkAllTodo="checkAllTodo"
        @clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from "pubsub-js";
import HeaderModule from "./components/HeaderModule";
import ListModule from "./components/ListModule";
import FooterModule from "./components/FooterModule";
export default {
  components: {
    HeaderModule,
    ListModule,
    FooterModule,
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  methods: {
    // 往数组开头添加一个todo
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    // 勾选/取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 全选/取消全选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 更改一个todo
    updateTodo(id, title) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
      });
    },
    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      // 开启深度监视
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkTodo", this.checkTodo);
    this.$bus.$on("updateTodo", this.updateTodo);
    this.pubId = pubsub.subscribe("deleteTodo", this.deleteTodo);
  },
  beforeDestroy() {
    this.$bus.$off("checkTodo");
    this.$bus.$off("updateTodo");
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background: #bd362f;
}
.btn-edit {
  color: #fff;
  background: orange;
  border: 1px solid orangered;
}
.btn-edit:hover {
  background: darkorange;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 20px auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>



