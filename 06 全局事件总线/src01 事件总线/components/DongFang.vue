<template>
  <div class="hero">
    <h4>姓名:{{ name }}</h4>
    <h4>绝技:{{ skill }}</h4>
    <h4>性别:{{ sex }}</h4>
    <button @click="sendSex">传性别</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "东方不败",
      skill: "葵花宝典",
      sex: "男",
    };
  },
  methods: {
    sendSex() {
      // 发送组件的性别
      this.$bus.$emit("sendSex", this.sex);
    },
  },
};
</script>

<style scoped>
.hero {
  width: 300px;
  background-color: pink;
}
</style>