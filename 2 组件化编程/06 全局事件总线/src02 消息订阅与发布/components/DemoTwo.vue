<template>
  <div class="box">
    <h2>{{ title }}</h2>
    <button @click="send">click</button>
  </div>
</template>

<script>
// 引入pubsub-js库(消息订阅与发布)
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      title: "demo2",
    };
  },
  methods: {
    send() {
      pubsub.publish("hello", 666);
    },
  },
};
</script>
