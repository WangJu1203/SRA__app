<template>
  <div id="info">
    <b-container class="bv-example-row">
      <b-row>
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
    </b-container>
  </div>
</template>

<script>
import UserInfomation from "../UserInfomation/index.vue";
import WorkingDetail from "../WorkingDetail/index.vue";
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
