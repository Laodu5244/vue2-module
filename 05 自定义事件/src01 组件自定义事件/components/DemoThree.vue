<template>
  <div class="hero">
    <h3>江湖人称:{{ name }}</h3>
    <button @click="sendDemo3">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "铁掌李元",
    };
  },
  methods: {
    sendDemo3() {
      this.$emit("demo3", this.name);
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