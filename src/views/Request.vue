<template>
  <div id="request" style="margin-left: 270px">
    <div class="filter">
      <p class="card-header">Filters</p>
      <div class="card-body">
        <div class="card-body__filter">
          <div class="card-body__filter-box">
            <label class="typo__label">Status</label>
            <multiselect
              v-model="value"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a tag"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></multiselect>
          </div>
          <div class="card-body__filter-box">
            <label class="typo__label">Project</label>
            <multiselect
              v-model="value"
              :options="project"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Pick a value"
            ></multiselect>
          </div>
          <div class="card-body__filter-box">
            <label class="typo__label">Division</label>
            <multiselect
              v-model="value"
              :options="project"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Pick a value"
            ></multiselect>
          </div>
          <div class="card-body__filter-box">
            <label class="typo__label">Requester</label>
            <multiselect
              v-model="value"
              :options="project"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Pick a value"
            ></multiselect>
          </div>
          <div class="card-body__filter-box">
            <label class="typo__label">Approved</label>
            <multiselect
              v-model="value"
              :options="project"
              :searchable="false"
              :close-on-select="false"
              :show-labels="false"
              placeholder="Pick a value"
            ></multiselect>
          </div>
        </div>
        <div>
          <button class="btn-reset">Reset filter</button>
        </div>
      </div>
    </div>
    <div class="results">
      <div class="results__options">
        <div class="results__select">
          <label for="inline-form-custom-select-pref">Show</label>
          <b-form inline>
            <b-form-select
              class="results__select-box"
              :options="[{ text: '...', value: null }, '10', '20', '50', '100']"
              :value="null"
            ></b-form-select>
          </b-form>
          <label>entries</label>
        </div>
        <div class="results__confirm">
          <button class="results__approve">Approve</button>
          <button class="results__reject">Reject</button>
        </div>
      </div>
      <div>
        <b-table
          striped
          :items="items"
          :fields="fields"
          class="results__table"
        ></b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
export default {
  name: "App",
  components: { Multiselect },
  data() {
    return {
      value: null,
      options: ["pending", "approved", "options"],
      project: [""],
      division: [
        { value: null, text: "" },
        { text: "Sorry, no match options", disabled: true },
      ],
      fields: [
        "NO.",
        "REQUESTER",
        "DIVISION",
        "PROJECT",
        "APPROVER",
        "STATUS",
        "CREATED",
      ],
    };
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.card-header {
  margin-left: 10px;
  color: #82868b;
}
.typo__label {
  font-size: small;
  color: #82868b;
}
.card-body__filter {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  gap: 20px;
}
.card-body__filter-box {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  text-align: start;
  border-radius: 5px;
}
.select-box {
  min-height: 40px;
  display: block;
  padding: 8px 40px 0 8px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fff;
  font-size: 14px;
}
.btn-reset {
  border-radius: 5px;
  padding: 8px 20px;
  margin-left: 10px;
  color: #fff;
  background: #82868b;
  border: none;
}
.results__options {
  display: flex;
  justify-content: space-between;
}
.results__select {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 10px;
  font-size: small;
}
.results__select-box {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  background: #fff;
  width: 90px;
}
.results__confirm button {
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}
.results__approve {
  color: #fff;
  background: #a49cf5;
}
.results__reject {
  color: #fff;
  background: #f19090;
  margin: 0 20px;
}
.results__table {
  font-weight: 100;
  color: #d3d9e0;
}
</style>
