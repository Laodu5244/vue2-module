<template>
  <div class="hero">
    <h3>江湖人称:{{ name }}</h3>
    <h3>计数器:{{ num }}</h3>
    <button @click="num++">num++</button>
    <button @click="sendDemo2">绑定</button>
    <button @click="unbind">解绑</button>
    <button @click="death">销毁组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "侯二侠",
      num: 1,
    };
  },
  methods: {
    sendDemo2() {
      // 触发demotwo组件身上的demo2事件
      this.$emit("demo2", this.name);
      this.$emit("demo1");
    },
    unbind() {
      // 解绑demotwo组件身上的demo2事件
      // this.$off("demo2"); //解绑一个事件
      // this.$off(["demo2", "demo1"]); //解绑多个事件
      this.$off(); //解绑所有事件
    },
    death() {
      this.$destroy();
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