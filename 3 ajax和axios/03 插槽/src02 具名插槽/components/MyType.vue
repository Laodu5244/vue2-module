<template>
  <div class="type">
    <h3>{{ title }}分类</h3>
    <!-- 创建默认插槽 -->
    <slot name="center"> 没有传递具体结构时出现</slot>
    <slot name="footer"> 没有传递具体结构时出现</slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scpoed>
.type {
  background: skyblue;
  width: 200px;
  height: 300px;
  overflow: hidden;
}
h3 {
  text-align: center;
  background-color: orange;
}
</style>