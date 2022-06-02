<template>
  <div>
    <ul>
      <li>01 <input type="text" /></li>
      <li>02 <input type="text" /></li>
      <li>03 <input type="text" /></li>
      <li>04 <input type="text" /></li>
      <li>05 <input type="text" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNews",
  beforeDestroy() {
    console.log("news组件即将销毁");
  },
};
</script>

<style>
</style>