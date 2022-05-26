<template>
  <div class="title">
    <h3>{{ msg }}</h3>
    <!-- 绑定一个自定义事件: demo2 (使用v-on) -->
    <demo-two @demo1="demo1" v-on:demo2="demo2" />
  </div>
</template>

<script>
import DemoTwo from "./components/DemoTwo";
export default {
  components: { DemoTwo },
  data() {
    return {
      msg: "剑侠图",
    };
  },
  methods: {
    demo2(name) {
      console.log("收到了demo2的name", name);
    },
    demo1() {
      console.log("demo1被触发了");
    },
  },
};
</script>

<style>
.title {
  background-color: #999;
}
</style>