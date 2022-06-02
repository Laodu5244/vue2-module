<template>
  <div>
    <p @click="show">江湖人称:{{ name }}</p>
    <p>武器:{{ arms }}</p>
    <p>年龄:{{ x + y }}</p>
  </div>
</template>

<script>
// 引入mixin
import { mixin, $$data } from "./mixin";
export default {
  data() {
    return {
      name: "叶开",
      arms: "小李飞刀",
    };
  },
  // 调用mixin(必须写在数组里)
  mixins: [mixin, $$data],
};
</script>

<style>
p {
  color: rgb(56, 145, 8);
}
</style>

