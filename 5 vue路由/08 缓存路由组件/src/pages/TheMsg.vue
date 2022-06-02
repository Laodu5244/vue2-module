<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <router-link
          :to="{
            name: 'detail',
            params: { id: m.id, title: m.title },
          }"
          >{{ m.title }}
        </router-link>
        <button @click="pu(m)">push</button>
        <button @click="re(m)">replace</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  namo: "TheMsg",
  data() {
    return {
      msgList: [
        { id: "01", title: "消息1" },
        { id: "02", title: "消息2" },
        { id: "03", title: "消息3" },
      ],
    };
  },
  methods: {
    pu(m) {
      setTimeout(() => {
        this.$router.push({
          name: "detail",
          params: { id: m.id, title: m.title },
        });
      }, 700);
    },
    re(m) {
      this.$router.replace({
        name: "detail",
        params: { id: m.id, title: m.title },
      });
    },
  },
  beforeDestroy() {
    console.log("news组件即将销毁");
  },
};
</script>

