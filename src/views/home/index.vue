<template>
  <div class="home-container">
    <h1>home</h1>
    <ul class="items">
      <li @click="toPageHandle('/todos')">todos</li>
      <li @click="toPageHandle('/async-comp')">asyncComp</li>
      <li @click="toPageHandle('/GDP')">GDP</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toPageHandle(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url(./index.scss);
</style>
