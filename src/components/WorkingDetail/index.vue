<template>
  <div id="wokingDetail">
    <h5>CURRENT WEEK EFFORT</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Project Name</th>
          <th scope="col">∑</th>
          <th scope="col">09/18</th>
          <th scope="col">09/19</th>
          <th scope="col">09/20</th>
          <th scope="col">09/21</th>
          <th scope="col">09/22</th>
          <th scope="col">09/25</th>
          <th scope="col">09/26</th>
          <th scope="col">09/27</th>
          <th scope="col">09/28</th>
          <th scope="col">09/29</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Smartosc Devsecops For Carehealth Dedicated (fe)</td>
          <td>80 (100%)</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
          <td>8</td>
        </tr>
      </tbody>
    </table>

    <h5>WORKING DETAILS</h5>
    <div>
      <b-table hover :items="items" :fields="fields"></b-table>
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
          key: "no",
          sortable: false,
        },
        {
          key: "project_name",
          sortable: false,
        },
        {
          key: "start_date",
          sortable: false,
        },
        {
          key: "end_date",
          sortable: false,
        },
        {
          key: "total_effort",
          sortable: false,
        },
        {
          key: "evaluation",
          sortable: false,
        },
      ],
      items: [
        {
          isActive: false,
          no: 1,
          project_name: "Smartosc Devsecops For Carehealth Dedicated (fe)",
          start_date: "2023-08-15",
          end_date: "2024-08-13",
          total_effort: "2088",
          evaluation: "N/A",
        },
        {
          isActive: false,
          no: 2,
          project_name: "SCG Dedicated Resource",
          start_date: "2022-10-01",
          end_date: "2022-10-31",
          total_effort: "	168",
          evaluation: "N/A",
        },
        {
          isActive: false,
          no: 3,
          project_name: "Heros Website Development Wo 2",
          start_date: "2023-03-11",
          end_date: "2023-03-31",
          total_effort: "30",
          evaluation: "N/A",
        },
        {
          isActive: false,
          no: 4,
          project_name: "Heros Website Development Wo 2",
          start_date: "2023-03-01",
          end_date: "2023-03-10",
          total_effort: "32",
          evaluation: "N/A",
        },
        {
          isActive: false,
          no: 5,
          project_name: "	Heros Website Development Wo 2",
          start_date: "2023-02-13",
          end_date: "2023-02-28",
          total_effort: "48",
          evaluation: "N/A",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
