<template>
  <div>
    <h4>上方组件的求和: {{ sum }}</h4>
    <p>列表中第一个人的名字是:{{ firstName }}</p>
    <h3>{{ hero }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="add2">添加姓周的人</button>
    <button @click="add3">添加服务器的数据</button>
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
      return this.$store.state.heros.heroList;
    },
    sum() {
      return this.$store.state.count.sum;
    },
    firstName() {
      return this.$store.getters["heros/firstName"];
    },
  },
  methods: {
    add() {
      const hero = { id: nanoid(), name: this.name };
      this.$store.commit("heros/AddHero", hero);
      this.name = "";
    },
    add2() {
      const zhou = { id: nanoid(), name: this.name };
      this.$store.dispatch("heros/addZhou", zhou);
      this.name = "";
    },
    add3() {
      this.$store.dispatch("heros/addServer");
    },
  },
};
</script>

<style scoped>
h4 {
  color: blueviolet;
}
</style>