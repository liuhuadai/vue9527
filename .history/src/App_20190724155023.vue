<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style  scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-container{
  padding-top: 40px;
}
</style>
