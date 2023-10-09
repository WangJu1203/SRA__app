<template>
  <div class="sidebarAdmin">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div
          class="bg-dark col-auto col-md-4 col-lg-2 min-vh-100 d-flex felx-column justify-content-between"
        >
          <div class="bg-dark p-2">
            <a
              class="d-flex text-decoration-none mt-1 align-items-center text-white"
            >
              <span class="fs-4 d-none d-sm-inline">SideMenu</span>
            </a>
            <ul class="nav nav-pills flex-column mt-4">
              <li class="nav-item py-2 py-sm-0">
                <a href="#" class="nav-link text-white">
                  <i class="fas fa-user"></i>
                  <span
                    class="fs-4 ms-3 d-none d-sm-inline"
                    @click="GotoProfile"
                    >Profile</span
                  >
                </a>
              </li>
              <li class="nav-item py-2 py-sm-0">
                <a href="#" class="nav-link text-white">
                  <i class="fa-solid fa-code-pull-request"></i>
                  <span
                    class="fs-4 ms-3 d-none d-sm-inline"
                    @click="GotoRequest"
                    >Request</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pl-3">
          <header__app></header__app>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Header/index.vue";
export default {
  name: "RsaAppIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    GotoProfile: function () {
      this.$router.push("/profile");
    },
    GotoRequest: function () {
      this.$router.push("/request");
    },
  },
  components: {
    header__app: Header,
  },
};
</script>

<style lang="scss" scoped>
.nav-pills li a:hover {
  background-color: black;
  width: 100%;
}
</style>
