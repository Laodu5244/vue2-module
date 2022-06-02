<template>
  <div class="container">
    <my-type title="书籍">
      <template scope="{books}">
        <ul>
          <li v-for="(book, i) in books" :key="i">{{ book }}</li>
        </ul>
      </template>
    </my-type>
    <my-type title="书籍">
      <template scope="{books}">
        <ol>
          <li v-for="(book, i) in books" :key="i">{{ book }}</li>
        </ol>
      </template>
    </my-type>
    <my-type title="书籍">
      <template scope="{books}">
        <h5 v-for="(book, i) in books" :key="i">{{ book }}</h5>
      </template>
    </my-type>
  </div>
</template>

<script>
import MyType from "./components/MyType";
export default {
  components: { MyType },
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
h5 {
  text-align: center;
}
</style>







