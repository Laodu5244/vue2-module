// 全局事件总线
<template>
  <div>
    <h2 class="h2">{{ msg }}</h2>
    <ling-hu />
    <dong-fang />
  </div>
</template>

<script>
import DongFang from "./components/DongFang";
import LingHu from "./components/LingHu";
export default {
  components: { LingHu, DongFang },
  data() {
    return {
      msg: "笑傲江湖",
    };
  },
};
</script>

<style>
.h2 {
  color: brown;
}
</style>