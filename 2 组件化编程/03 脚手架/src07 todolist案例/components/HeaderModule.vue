<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称,按回车确认"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 引入nanoid
import { nanoid } from "nanoid";
export default {
  props: ["addTodo"],
  methods: {
    add(event) {
      // 检验输入不能为空
      if (!event.target.value.trim()) {
        return alert("输入不能为空");
      }
      // 将用户的输入包装成一个todo对象
      let todo = {
        id: nanoid(),
        title: event.target.value,
        done: false,
      };
      // 添加一个新todo(调用的父级unshift(todo))
      this.addTodo(todo);
      // 添加之后清空input框;
      event.target.value = "";
    },
  },
};
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 238, 0.6);
}
</style>