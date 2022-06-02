<template>
  <div class="container">
    <the-search />
    <the-list />
  </div>
</template>

<script>
import TheList from "./components/TheList";
import TheSearch from "./components/TheSearch";
export default {
  components: { TheSearch, TheList },
};
</script>

<style>
body {
  background: #eee;
}
.container {
  width: 70%;
  margin: 0 auto;
}
</style>






