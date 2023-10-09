<template>
  <div id="info">
    <b-row style="margin-left: 20px">
      <b-tabs content-class="mt-3">
        <b-tab title="UserInfo" active>
          <p><user__info></user__info></p
        ></b-tab>
        <b-tab title="WorkingDetail"
          ><p>
            <woking__detail></woking__detail></p
        ></b-tab>
      </b-tabs>
    </b-row>
  </div>
</template>

<script>
import UserInfomation from "../components/UserInfomation/index.vue";
import WorkingDetail from "../components/WorkingDetail/index.vue";
export default {
  name: "RsaAppIndex",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    user__info: UserInfomation,
    woking__detail: WorkingDetail,
  },
};
</script>

<style lang="scss" scoped></style>
