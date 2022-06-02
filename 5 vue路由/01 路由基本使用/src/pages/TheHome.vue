<template>
  <h2>Home组件的内容</h2>
</template>

<script>
export default {
  name: "TheHome",
  beforeDestroy() {
    console.log("home组件即将销毁");
  },
  mounted() {
    console.log("home组件挂载完毕");
  },
};
</script>
