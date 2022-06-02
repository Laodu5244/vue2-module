<template>
  <div class="demo">
    <h5>姓名:{{ name }}</h5>
    <h5>绝技:{{ kungfu }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "李慕白",
      kungfu: "武当剑法",
    };
  },
};
</script>

<!-- scoped: 让样式锁定在组件内(避免与其他组件冲突) -->
<!-- app组件不能添加scoped属性 -->
<style scoped>
.demo {
  background-color: skyblue;
}
</style>