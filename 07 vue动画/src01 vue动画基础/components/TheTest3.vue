<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 多个元素动画 -->
    <transition-group name="late" appear>
      <h1 v-show="!isShow" key="1">hello modules</h1>
      <h1 v-show="isShow" key="2">hello modules</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
  transform: translate();
}
@keyframes late {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
/* 动画效果 */
.late-enter-active {
  animation: late 0.5s;
}
.late-leave-active {
  animation: late 0.5s reverse;
}
</style>