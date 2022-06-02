<template>
  <div>
    <!-- vue的ref 相当于js的id -->
    <vue-module1 ref="vm1"></vue-module1>
    <vue-module2></vue-module2>
    <button @click="bt()">输出ref</button>
  </div>
</template>

<script>
// 引入组件
import VueModule1 from "./components/VueModule1.vue";
import VueModule2 from "./components/VueModule2.vue";
export default {
  components: { VueModule1, VueModule2 },
  methods: {
    bt() {
      // 组件标签的ref属性是这个组件对象(VueComponent)
      console.log(this.$refs.vm1);
    },
  },
};
</script>

