<template>
  <div class="hero">
    <h4>姓名:{{ name }}</h4>
    <h4>绝技:{{ skill }}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "令狐冲",
      skill: "独孤九剑",
    };
  },
  mounted() {
    // 接收dongfang组件传的数据
    this.$bus.$on("sendSex", (data) => {
      console.log("接收其他组件传的性别:", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("sendSex");
  },
};
</script>

<style scoped>
.hero {
  width: 300px;
  background-color: skyblue;
}
</style>