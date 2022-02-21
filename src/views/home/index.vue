<template>
  <div class="home-container">
      <h1>home</h1>
      <ul class="items" >
          <li @click="toPageHandle">todos</li>
      </ul>
  </div>
</template>

<script>
export default {
   methods:{
       toPageHandle(){
          this.$router.push('/todos')
       }
   }
}
</script>

<style lang='less' scoped>
.home-container{

}
</style>