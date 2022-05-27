<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteId(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  // 声明接收todo对象
  props: ["todo"],
  methods: {
    // 勾选/取消勾选
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    deleteId(id) {
      if (confirm("确定删除吗?")) {
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border: 1px solid skyblue;
  margin: 5px 0;
  border-radius: 18px;
}
li label {
  float: left;
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin: 0 10px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-right: 15px;
}
li:before {
  content: initial;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>