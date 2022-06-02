<template>
  <div>
    <h1>hello vue</h1>
    <button @click="btn">click</button>
    <button @click="btn2">click</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    btn() {
      axios.get("http://localhost:8080/demo1/heros").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    btn2() {
      axios.get("http://localhost:8080/demo2/heros").then(
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





