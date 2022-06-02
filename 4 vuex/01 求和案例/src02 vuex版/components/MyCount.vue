<template>
  <div>
    <h3>当前的和为:{{ $store.state.sum }}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <button @click="odd">奇数++</button>
    <button @click="wait">等一等</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  methods: {
    inc() {
      this.$store.commit("Add", this.num);
    },
    dec() {
      this.$store.commit("Sub", this.num);
    },
    odd() {
      this.$store.dispatch("addOdd", this.num);
    },
    wait() {
      this.$store.dispatch("addWait", this.num);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>