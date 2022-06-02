// 多个组件共享同一状态用vuex
<template>
  <div>
    <my-count />
  </div>
</template>

<script>
import MyCount from "./components/MyCount.vue";
export default {
  components: { MyCount },
};
</script>









