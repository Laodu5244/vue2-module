<template>
  <div>
    <h3>当前的和为:{{ sum }}</h3>
    <h3>当前的和乘以10倍:{{ bigSum }}</h3>
    <h3>我在{{ home }},学习{{ subject }}</h3>
    <h4>下方组件的总人数是:{{ heroList.length }}</h4>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="inc(num)">+</button>
    <button @click="dec(num)">-</button>
    <button @click="odd(num)">奇数++</button>
    <button @click="wait(num)">等一等</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      num: 1, // 用户选择的数字
    };
  },
  computed: {
    // 借助mapState生成计算属性,从state中读取数据
    ...mapState("count", ["sum", "home", "subject"]),
    ...mapState("heros", ["heroList"]),

    ...mapGetters("count", ["bigSum"]),
  },
  methods: {
    // 借助mapMutations生成方法,调用commit联系mutations
    ...mapMutations("count", { inc: "Add", dec: "Sub" }),
    // 借助mapActions生成方法,调用dispatch联系actions
    ...mapActions("count", { odd: "addOdd", wait: "addWait" }),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
h4 {
  color: red;
}
</style>