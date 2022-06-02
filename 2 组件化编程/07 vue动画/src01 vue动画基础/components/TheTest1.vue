<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="late" appear>
      <h1 v-show="isShow">hello module</h1>
    </transition>
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