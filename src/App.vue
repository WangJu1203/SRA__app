<template>
  <div id="app">
    <sideBar__app></sideBar__app>
    <router-view></router-view>
    <!-- <info__app></info__app>
    <request__app></request__app> -->
  </div>
</template>

<script>
import SideBar from "./components/Sidebar/index.vue";
// import Info from "./components/Info/index.vue";
export default {
  name: "App",
  components: {
    // info__app: Info,
    sideBar__app: SideBar,
  },
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  list-style: none;
}
body {
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 97.3%, 0.95) 44%,
    hsla(0, 0%, 97.3%, 0.46) 73%,
    hsla(0, 0%, 100%, 0)
  );
}
</style>
