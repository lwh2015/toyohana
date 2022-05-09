<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-link class="link" to="/hxx">胡小雄</router-link
  ><router-link class="link" to="/ljf">卢嘉枫</router-link
  ><router-link class="link" to="/lm">李鸣</router-link
  ><router-link class="link" to="/wch">王春桦</router-link
  ><router-link class="link" to="/yjh">余佳豪</router-link>
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.link {
  margin: 0 30px;
}
.view{
  margin: 20px 0;
}
</style>
