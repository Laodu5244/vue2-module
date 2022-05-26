// 组件的结构
<template>
  <div>
    <h2>江湖人称:{{ name }}</h2>
    <h2>武器:{{ arms }}</h2>
  </div>
</template>

// 组件的脚本
<script>
// 暴露接口
export default {
  data() {
    return {
      name: "童林童海川",
      arms: "鸳鸯钺",
    };
  },
};
</script>
