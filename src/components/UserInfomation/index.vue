<template>
  <div id="useInfo">
    <h3>USER INFORMATION</h3>
    <div class="user-info">
      <b-container class="bv-example-row">
        <b-row>
          <b-col>
            <div class="d-flex gap-5">
              <div class="b-avatar-custom mt-2 mb-2">
                <p>NVD</p>
              </div>
              <div class="d-flex flex-column ml-2 my-auto gap-2">
                <span>nguyen Van Duong</span>
                <p>duongnv5@smartosc.com</p>
              </div>
            </div>
            <ul>
              <li>
                <b-row>
                  <b-col d-flex flex-row>
                    <ul>
                      <li class="">
                        <a href=""
                          ><i class="fa-regular fa-star me-2"></i>Status</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><img
                            src="../../assets//svg/user.svg"
                            alt="#"
                            class="me-2"
                          />Name</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><img
                            src="../../assets//svg/user.svg"
                            alt="#"
                            class="me-2"
                          />Employee ID</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-regular fa-heart me-2"></i>Gender</a
                        >
                      </li>
                    </ul>
                  </b-col>
                  <b-col>
                    <ul>
                      <li class="green__active-status">Active</li>
                      <li class="">Nguyen Van Duong</li>
                      <li>3369</li>
                      <li>Male</li>
                    </ul>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li>
                <b-row>
                  <b-col d-flex flex-row>
                    <ul>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-house me-2"></i>Division</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><img
                            src="../../assets//svg/user.svg"
                            alt="#"
                            class="me-2"
                          />Department</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-users me-2"></i>Resource
                          Owner</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-book me-2"></i>Title</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-ranking-star me-2"></i>Rank</a
                        >
                      </li>
                      <li>
                        <a href=""><i class="fa-solid fa-tv me-2"></i>Ratio</a>
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-wrench me-2"></i>Total
                          Projects</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-timeline me-2"></i>Total
                          Hours</a
                        >
                      </li>
                      <li>
                        <a href=""
                          ><i class="fa-solid fa-car me-2"></i>Total Running
                          Projects</a
                        >
                      </li>
                    </ul>
                  </b-col>
                  <b-col>
                    <ul>
                      <li>Division 6</li>
                      <li>Division 6 - Frontend</li>
                      <li>Nguyen Thanh Tùng (tungnt3)</li>
                      <li>Senior Software Engineer</li>
                      <li>3.1</li>
                      <li>1</li>
                      <li>3</li>
                      <li>8</li>
                      <li>1</li>
                    </ul>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="mt-5">
          <b-col>
            <h4>Skill</h4>
            <div>
              <b-table hover :items="items_skills" :fields="fields"></b-table>
            </div>
          </b-col>
          <b-col>
            <h4>LANGUAGES</h4>
            <div>
              <b-table hover :items="items_language" :fields="fields"></b-table>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "RsaAppIndex",

  data() {
    return {
      fields: [
        {
          key: "Name",
          sortable: false,
        },
        {
          key: "Level",
          sortable: false,
        },
      ],
      items_skills: [
        {
          isActive: true,
          Name: "Vue",
          Level: "Junior",
        },
        {
          isActive: true,
          Name: "React",
          Level: "Mid",
        },
        {
          isActive: true,
          Name: "NodeJS",
          Level: "Junior",
        },
        {
          isActive: true,
          Name: "HTML,CSS,JS	",
          Level: "Mid",
        },
      ],
      items_language: [
        {
          isActive: true,
          Name: "English",
          Level: "Intermediate",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: black;
}
.green__active-status {
  background: #28c76f;
  width: 60px;
  text-align: center;
  color: aliceblue;
  border-radius: 4px;
}

.b-avatar-custom {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
  border-radius: 4px;
}
</style>
