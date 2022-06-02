<template>
  <div class="hero">
    <h3>江湖人称:{{ name }}</h3>
    <button @click="sendDemo2">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "侯二侠",
    };
  },
  methods: {
    sendDemo2() {
      // 触发demotwo组件身上的demo2事件
      this.$emit("demo2", this.name);
    },
  },
};
</script>

<style scoped>
.hero {
  background: pink;
  margin: 50px;
}
</style>