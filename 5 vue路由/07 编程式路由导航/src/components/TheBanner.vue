<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="btn1">后退</button>
      <button @click="btn2">前进</button>
      <button @click="btn3">退2</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn1() {
      this.$router.back();
    },
    btn2() {
      this.$router.forward();
    },
    btn3() {
      this.$router.go(-2);
    },
  },
};
</script>
