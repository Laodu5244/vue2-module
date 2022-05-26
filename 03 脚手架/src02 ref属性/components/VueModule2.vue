<template>
  <div>
    <h3>{{ msg }}</h3>
    <h4>计数器:{{ num }}</h4>
    <button @click="num++">num++</button>
    <button @click="n()">num--</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello module 2,vue一点也不难!",
      num: 1,
    };
  },
  methods: {
    n() {
      if (this.num > 0) {
        this.num--;
      }
    },
  },
};
</script>

<style>
</style>