<template>
  <div>
    <h3>{{ msg }}</h3>
    <demo-one />
    <demo-two />
  </div>
</template>

<script>
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo.vue";
export default {
  components: { DemoOne, DemoTwo },
  data() {
    return {
      msg: "hello vue",
    };
  },
};
</script>

