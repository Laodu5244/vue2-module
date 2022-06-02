<template>
  <div>
    <h3>当前的和为:{{ sum }}</h3>
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
      sum: 0, // 当前的和
    };
  },
  methods: {
    inc() {
      this.sum += this.num;
    },
    dec() {
      this.sum -= this.num;
    },
    odd() {
      if (this.sum % 2) {
        this.sum += this.num;
      }
    },
    wait() {
      setTimeout(() => {
        this.sum += this.num;
      }, 1000);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>