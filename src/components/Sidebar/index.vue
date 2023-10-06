<template>
  <div id="SideBar">
    <input type="checkbox" id="check" />
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>Smart OSC</header>
      <ul>
        <li>
          <a href="#"
            ><i class="fas fa-user">
              <span @click="GotoProfile">Profile</span></i
            ></a
          >
        </li>
        <li>
          <a href="#"
            ><i class="fa-solid fa-code-pull-request"
              ><span @click="GotoRequest">Request</span></i
            ></a
          >
        </li>
      </ul>
    </div>
    <section>
      <header__app></header__app>
      <!-- <info__app></info__app> -->
    </section>
  </div>
</template>

<script>
import Header from "../Header/index.vue";
// import Info from "../Info/index.vue";
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
    // info__app: Info,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

.sidebar {
  position: fixed;
  left: -250px;
  width: 250px;
  height: 100%;
  background: #042331;
  transition: all 0.5s ease;
  top: 0;
}

.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
}

.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transition: 0.4s;
}

ul li:hover a {
  padding-left: 50px;
}

.sidebar ul a i::before {
  margin-right: 16px;
}

#check {
  display: none;
}
label {
  position: absolute;
}

label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  background: #042331;
  border-radius: 3px;
}

label #btn {
  left: 40px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 6px 12px;
  transition: all 0.5s;
}
label #cancel {
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all 0.5s ease;
}

#check:checked ~ .sidebar {
  left: 0;
}

#check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}

#check:checked ~ label #cancel {
  left: 195px;
}
#check:checked ~ section {
  margin-left: 250px;
}
section {
  background-position: center;
  background-size: cover;
  transition: all 0.5s;
}
</style>
