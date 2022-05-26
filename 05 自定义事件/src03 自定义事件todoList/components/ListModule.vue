<template>
  <div>
    <ul class="todo-main">
      <item-module
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      />
    </ul>
  </div>
</template>

<script>
import ItemModule from "./ItemModule.vue";
export default {
  components: { ItemModule },
  props: ["todos", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>