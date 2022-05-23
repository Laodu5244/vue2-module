<template>
  <div>
    <p>本名:{{ name }}</p>
    <p>江湖人称:{{ oname }}</p>
    <p>性别:{{ sex }}</p>
    <p>年龄:{{ age + 1 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 简单声明接收
  // props: ["name", "oname", "sex", "age"],

  // 定义好数据类型的接受方法
  /* props: {
    name: String,
    oname: String,
    sex: String,
    age: Number,
  }, */

  /* 高大全写法:
  1 定义好数据类型
  2 默认值的指定
  3 必要性的限制 */
  props: {
    name: {
      type: String, //name的类型是字符串
      require: true, //name是必须传的
    },
    oname: {
      type: String,
      require: true,
    },
    sex: {
      type: String,
      default: "女", //默认值
    },
    age: {
      type: Number,
      default: 66, //默认值
    },
  },
};
</script>

<style>
p {
  color: brown;
}
</style>

