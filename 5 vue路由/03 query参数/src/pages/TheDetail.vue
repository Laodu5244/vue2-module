<template>
  <ul>
    <li>消息编号:{{ $route.query.id }}</li>
    <li>消息标题:{{ $route.query.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "TheDetail",
  mounted() {},
};
</script>

<style scoped>
li {
  font-weight: 700;
  font-size: 20px;
}
</style>