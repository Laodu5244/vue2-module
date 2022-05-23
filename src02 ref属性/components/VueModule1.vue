<template>
  <div id="module1">
    <!-- vue的ref 相当于js的id -->
    <h3 v-text="msg" ref="title"></h3>
    <button @click="btn">输出DOM</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello module 1,开启组件化开发之旅",
    };
  },
  methods: {
    btn() {
      // 获取属性是ref="title"的标签
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
#module1 {
  color: darkorange;
  background: skyblue;
}
</style>