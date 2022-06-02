<template>
  <h2>About组件的内容</h2>
</template>

<script>
export default {
  name: "TheAbout",
  beforeDestroy() {
    console.log("about组件即将销毁");
  },
  mounted() {
    console.log("about组件挂载完毕");
  },
};
</script>

