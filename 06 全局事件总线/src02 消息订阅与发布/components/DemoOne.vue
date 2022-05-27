<template>
  <div class="box">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
// 引入pubsub-js库(消息订阅与发布)
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      title: "demo1",
    };
  },
  mounted() {
    this.pubId = pubsub.subscribe("hello", (message, data) => {
      console.log("hello消息的回调执行了", message, data);
    });
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

