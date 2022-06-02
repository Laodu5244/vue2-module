<template>
  <div>
    <h1>你好</h1>
    <button @click="btn">click</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    btn() {
      axios.get("http://localhost:8080/heros").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>





