<template>
  <div id="header" style="width: 100%; padding: 10px 0">
    <div class="container">
      <div class="d-flex flex-row-reverse" style="height: 50px">
        <div class="p-2" style="cursor: pointer">
          <img src="../../assets///svg/moon.svg" alt="" class="ms-3" />
        </div>
        <div class="p-2" style="cursor: pointer">
          <span class="ms-3" style="font-size: 24px">Nguyen Van Duong</span>
        </div>
        <div class="p-2" style="cursor: pointer">
          <img src="../../assets//svg/user.svg" alt="" class="ms-3" />
        </div>
        <div class="p-2" style="cursor: pointer">
          <img
            src="../../assets///svg/bell.svg"
            alt=""
            class="ms-3"
            @click="modalShow = !modalShow"
          />
          <b-modal
            v-model="modalShow"
            hide-footer
            title="Notifications
            Mark all as read"
            >Have no Notifications</b-modal
          >
        </div>
      </div>
    </div>
  </div>
</template>
>

<script>
export default {
  name: "RsaAppIndex",

  data() {
    return {
      modalShow: false,
    };
  },

  mounted() {},

  methods: {
    onSidebarChanged() {},
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
.navbar {
  background: #fff;
}

img {
  width: 24px;
  height: 24px;
}
</style>
