<template>
  <ul>
    <li>{{ id }}</li>
    <li>{{ title }}</li>
  </ul>
</template>

<script>
export default {
  name: "TheDetail",
  props: ["id", "title"],
};
</script>

<style scoped>
li {
  font-weight: 700;
  font-size: 20px;
}
</style>