<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInLeft"
    leave-active-class="animate__backOutUp"
  >
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="blur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <div class="item-left">
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="edit(todo)">
          编辑
        </button>
        <button class="btn btn-danger" @click="deleteId(todo.id)">删除</button>
      </div>
    </li>
  </transition>
</template>

<script>
import "animate.css";
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
    // 编辑
    edit(todo) {
      if (todo.isEdit !== undefined) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // $nextTick:在下一次更新结束后执行本函数
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },

    // 失去焦点回调
    blur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) {
        return alert("输入不能为空");
      }
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
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
  display: flex;
  justify-content: space-between;
}
li label {
  cursor: pointer;
}
li label input {
  vertical-align: middle;
  margin: 0 10px;
  position: relative;
  top: -1px;
}
li button {
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
.item-left {
  display: flex;
}
</style>