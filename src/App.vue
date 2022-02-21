<template>
  <div id="app">
    <h4>vue3 vite</h4>
    <div class="main">
      <router-link to="/todos">todos</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/about">async Comp</router-link>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>