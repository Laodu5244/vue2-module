<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div
      class="card"
      v-show="info.users.length"
      v-for="user in info.users"
      :key="user.login"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="info.isFirst">欢迎使用guthub!</h2>
    <!-- 展示加载中 -->
    <h2 v-show="info.isLoading">加载中...</h2>
    <!-- 展示错误信息 -->
    <h3 v-show="info.errMsg">出现了一些问题: {{ info.errMsg }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>

<style scoped>
.row {
  margin-top: 40px;
}
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 15%;
  padding: 0.75rem;
  margin: 0.2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
