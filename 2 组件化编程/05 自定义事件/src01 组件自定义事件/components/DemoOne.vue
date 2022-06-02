<template>
  <div class="hero">
    <h3>江湖人称:{{ name }}</h3>
    <button @click.once="sendName">click</button>
  </div>
</template>

<script>
export default {
  props: ["getName"],
  data() {
    return {
      name: "镇东侠",
    };
  },
  methods: {
    sendName() {
      this.getName(this.name);
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