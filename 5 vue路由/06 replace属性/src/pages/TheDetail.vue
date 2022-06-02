<template>
  <ul>
    <li>消息编号:{{ $route.params.id }}</li>
    <li>消息标题:{{ $route.params.title }}</li>
    <!-- 对象写法 -->
    <!-- <li>a:{{ a }}</li>
    <li>b:{{ b }}</li> -->
    <!-- 布尔,函数写法 -->
    <li>{{ id }}</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "TheDetail",
  // props: ["a", "b"], //对象写法
  props: ["id", "title"], //布尔,函数写法
};
</script>

<style scoped>
li {
  font-weight: 700;
  font-size: 20px;
}
</style>