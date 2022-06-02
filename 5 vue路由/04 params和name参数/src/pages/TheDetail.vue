<template>
  <ul>
    <li>消息编号:{{ $route.params.id }}</li>
    <li>消息标题:{{ $route.params.title }}</li>
  </ul>
</template>

<script>
export default {
  name: "TheDetail",
};
</script>

<style scoped>
li {
  font-weight: 700;
  font-size: 20px;
}
</style>