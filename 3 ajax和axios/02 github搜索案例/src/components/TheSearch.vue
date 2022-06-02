<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">搜索 Github 用户</h3>
    <div>
      <input type="text" placeholder="请输入" v-model="keyword" />&nbsp;
      <button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then((response) => {
          console.log("请求成功了");
          this.$bus.$emit(
            "updateListData",
            {
              isLoading: false,
              errMsg: "",
              users: response.data.items,
            },
            (error) => {
              this.$bus.$emit("updateListData", {
                isLoading: false,
                errMsg: error.message,
                users: [],
              });
            }
          );
        });
    },
  },
};
</script>

<style scpoed>
.jumbotron {
  color: brown;
  font-size: 24px;
}
.jumbotron input {
  height: 32px;
  width: 300px;
  padding-left: 10px;
  border-color: aqua;
  outline: none;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #777;
  font-size: 18px;
}
button {
  height: 35px;
  width: 60px;
  border-color: orangered;
  background: orange;
  border-radius: 5px;
  box-shadow: 1px 1px 5px orangered;
  font-size: 17px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
}
button:hover {
  background: darkorange;
}
</style>
