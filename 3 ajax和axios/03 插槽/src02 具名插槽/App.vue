<template>
  <div class="container">
    <my-type title="英雄">
      <!-- 在标签体内写内容 -->
      <img slot="center" src="./components/1.jpeg" />
      <a slot="footer" href="http://www.baidu.com">百度一下</a>
    </my-type>
    <my-type title="书籍">
      <ul slot="center">
        <li v-for="(book, index) in books" :key="index">{{ book }}</li>
      </ul>
      <a slot="footer" href="http://www.baidu.com">百度一下</a>
    </my-type>
    <my-type title="爱好">
      <img slot="center" src="./components/2.webp" />
      <template v-slot:footer>
        <a slot="footer" href="http://www.baidu.com">百度一下</a>
      </template>
    </my-type>
  </div>
</template>

<script>
import MyType from "./components/MyType";
export default {
  components: { MyType },
  data() {
    return {
      heros: ["郭靖", "李慕白", "陆小凤"],
      books: ["陆小凤", "侠客行", "侠义英雄转", "卧虎藏龙"],
      hobbys: ["看书", "弹琴", "打代码"],
    };
  },
};
</script>

<style>
.container {
  width: 70%;
  margin: 50px auto;
  display: flex;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 150px;
}
</style>







