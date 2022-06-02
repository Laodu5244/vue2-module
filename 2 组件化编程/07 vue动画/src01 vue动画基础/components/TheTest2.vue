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
  background: blueviolet;
  /* transition: all 0.5s; */
}
.late-enter-active,
.late-leave-active {
  transition: all 0.5s;
}
.late-enter,
.late-leave-to {
  transform: translateX(-100%);
}

.late-enter-to,
.late-leave {
  transform: translateX(0);
}
</style>