<!-- 组件自定义事件适用于: 子组件==>父组件 -->
<template>
  <div class="title">
    <h3>{{ msg }}</h3>
    <!-- 传递函数类型的props -->
    <demo-one :getName="getName" />
    <!-- 绑定一个自定义事件: demo2 (使用v-on) -->
    <demo-two v-on:demo2.once="demo2" />
    <!-- 绑定一个自定义事件: demo3 (使用ref) -->
    <demo-three ref="demo3" />
  </div>
</template>

<script>
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";
import DemoThree from "./components/DemoThree";
export default {
  components: { DemoOne, DemoTwo, DemoThree },
  data() {
    return {
      msg: "剑侠图",
    };
  },
  methods: {
    getName(name) {
      console.log("收到了demo1的name", name);
    },
    demo2(name) {
      console.log("收到了demo2的name", name);
    },
    demo3(name) {
      console.log("收到了demo3的name", name);
    },
  },
  mounted() {
    // 用生命周期绑定一个自定义事件
    this.$refs.demo3.$once("demo3", this.demo3);
  },
};
</script>

<style>
.title {
  background-color: #999;
}
</style>