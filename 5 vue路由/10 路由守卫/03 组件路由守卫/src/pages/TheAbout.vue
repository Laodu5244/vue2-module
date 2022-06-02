<template>
  <h2>About组件的内容</h2>
</template>

<script>
export default {
  name: "TheAbout",
  // 通过路由规则,进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter被调用了");
    if (to.meta.isAuth) {
      if (localStorage.getItem("name") === "admin") {
        next();
      } else {
        alert("权限不够");
      }
    } else {
      next();
    }
  },
  // 通过路由规则,离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave被调用了");
    next();
  },
};
</script>

