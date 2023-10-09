<template>
  <div id="app">
    <div class="app-container">
      <sideBar__app></sideBar__app>
      <!-- <sidebarAmin_app></sidebarAmin_app> -->

      <!-- <request__app></request__app> -->
    </div>
  </div>
</template>

<script>
import SideBar from "./components/Sidebar/index.vue";
// import SidebarAdmin from "./components/SidebarAdmin/index.vue";
export default {
  name: "App",
  components: {
    sideBar__app: SideBar,
    // sidebarAmin_app: SidebarAdmin,
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

.app-container {
  max-width: 1440px;
}
</style>
