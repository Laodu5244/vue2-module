<template>
  <!-- 传入的prop属性值不要修改(会报错) -->
  <div>
    <!-- 如果想让属性里的数值是动态的,在属性上添加v-bing -->
    <dong-xie name="黄老邪" oname="东邪" sex="男" :age="34" />
    <hr />
    <dong-xie name="欧阳峰" oname="西毒" sex="男" />
    <hr />
    <dong-xie name="灭绝" oname="灭绝师太" :age="43" />
  </div>
</template>

<script>
// 引入组件
import DongXie from "./components/DongXie";
export default {
  components: { DongXie },
};
</script>

