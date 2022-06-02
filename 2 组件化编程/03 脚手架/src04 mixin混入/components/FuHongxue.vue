<template>
  <div>
    <p @click="show">江湖人称:{{ name }}</p>
    <p>武器:{{ arms }}</p>
  </div>
</template>

<script>
import { mixin } from "./mixin";
export default {
  data() {
    return {
      name: "傅红雪",
      arms: "魔刀",
    };
  },
  mixins: [mixin],
};
</script>

<style>
p {
  color: rgb(56, 145, 8);
}
</style>
