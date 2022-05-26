<template>
  <div>
    <img src="./assets/logo.png" />
    <DemoOne></DemoOne>
    <DemoTwo></DemoTwo>
  </div>
</template>

<script>
import DemoOne from "./components/DemoOne";
import DemoTwo from "./components/DemoTwo";
export default {
  components: { DemoOne, DemoTwo },
};
</script>

