<template>
  <div>
    <ul>
      <li id="opa" :style="{ opacity }">vue其实很简单</li>
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
  data() {
    return {
      opacity: 1,
    };
  },
  // 这两个钩子是路由组件独有的,用于捕获路由组件的激活状态
  // 生命周期钩子:activated(激活)
  activated() {
    console.log("激活");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      console.log("...");
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 15);
  },
  // 生命周期钩子:activated(失活)
  deactivated() {
    console.log("失活");
    clearInterval(this.timer);
  },
};
</script>

<style >
#opa {
  font-size: 22px;
  font-weight: bold;
  color: orangered;
  list-style: none;
  margin: 5px;
}
</style>

