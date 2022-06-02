// 组件的结构
<template>
  <div>
    <h2>{{ msg }}</h2>
    <button @click="btn">点击</button>
  </div>
</template>

// 组件的脚本
<script>
// 暴露接口
export default {
  data() {
    return {
      msg: "hello module",
    };
  },
  methods: {
    btn() {
      if (this.msg == "hello module") {
        this.msg = "你好组件";
      } else {
        this.msg = "hello module";
      }
    },
  },
};
</script>

// 组件的样式

<style scoped>
div {
  background: orange;
}
</style>