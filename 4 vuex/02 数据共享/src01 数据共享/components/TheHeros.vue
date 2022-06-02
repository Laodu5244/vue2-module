<template>
  <div>
    <h4>上方组件的求和: {{ sum }}</h4>
    <h3>{{ hero }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="h in heroList" :key="h.id">{{ h.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  data() {
    return {
      hero: "英雄列表",
      name: "",
    };
  },
  computed: {
    heroList() {
      return this.$store.state.heroList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const heros = {
        id: nanoid(),
        name: this.name,
      };
      this.$store.commit("AddHero", heros);
      this.name = "";
    },
  },
};
</script>

<style scoped>
h4 {
  color: blueviolet;
}
</style>