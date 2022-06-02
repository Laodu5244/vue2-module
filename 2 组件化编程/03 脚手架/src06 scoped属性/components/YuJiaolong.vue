<template>
  <div class="demo">
    <h5>姓名:{{ name }}</h5>
    <h5>绝技:{{ kungfu }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "玉娇龙",
      kungfu: "武当剑法",
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: rgb(187, 245, 193);
}
</style>