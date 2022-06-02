// 组件的结构
<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <button @click="btn">点击</button>
  </div>
</template>

// 组件的脚本
<script>
// 暴露接口
export default {
  name: "demo1",
  data() {
    return {
      msg: "hello module",
    };
  },
  methods: {
    btn() {
      this.msg.innerText = "你好组件";
    },
  },
};
</script>

// 组件的样式
<style lang="">
.demo {
  background: orange;
}
</style>