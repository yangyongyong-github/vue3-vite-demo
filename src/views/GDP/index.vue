<template>
  <h1>2019 全球 GOP Top 5</h1>
  <div class="container">
    <Bar1 :gdp="gpd" />
    <Bar2 :gdp="gpd" />
  </div>

  <div class="controls">
    <div class="item" v-for="item in gdp" :key="item.country">
      <label>{{ item.country }}</label>
      <input type="number" step="0.001" min="0" />
    </div>
    <div class="item">
      <label>中国</label>
      <input type="number" step="0.001" min="0" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Bar1 from "./bar1.vue";
import Bar2 from "./bar2.vue";

export default {
  name: "GDP",
  components: {
    Bar1,
    Bar2,
  },
  setup() {
    const gdp = ref([]);
    async function fetchGdp() {
      gdp.value = await fetch("../../api/gdp.json").then((resp) => resp.json());
    }
    fetchGdp();
    return {
      gdp,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url(./style/index.scss);
</style>