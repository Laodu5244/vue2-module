<template>
  <div>
    <h5>姓名:{{ name }}</h5>
    <!-- 引用全局过滤器 -->
    <h5>绝技:{{ kungfu }}</h5>
    <h5>过滤器:{{ kungfu | mySlice }}</h5>
    <div>{{ x + y }}</div>
    <button @click="test()">测试全局hello</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "郭靖",
      kungfu: "降龙十八章",
    };
  },
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>

<style>
</style>