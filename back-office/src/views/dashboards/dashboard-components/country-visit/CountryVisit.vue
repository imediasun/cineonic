<template>
  <div>
    <CountryMap></CountryMap>
    <b-row class="mb-3 mt-4">
      <b-col lg="3" cols="3" md="3">
        <span>India</span>
      </b-col>
      <b-col lg="7" cols="7" md="7">
        <b-progress value="30" max="100" variant="primary"></b-progress>
      </b-col>
      <b-col lg="2" cols="2" md="2">
        <span>28%</span>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col lg="3" cols="3" md="3">
        <span>UK</span>
      </b-col>
      <b-col lg="7" cols="7" md="7">
        <b-progress value="21" max="100" variant="info"></b-progress>
      </b-col>
      <b-col lg="2" cols="2" md="2">
        <span>21%</span>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col lg="3" cols="3" md="3">
        <span>USA</span>
      </b-col>
      <b-col lg="7" cols="7" md="7">
        <b-progress value="18" max="100" variant="danger"></b-progress>
      </b-col>
      <b-col lg="2" cols="2" md="2">
        <span>18%</span>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="3" cols="3" md="3">
        <span>Chaina</span>
      </b-col>
      <b-col lg="7" cols="7" md="7">
        <b-progress value="12" max="100" variant="orange"></b-progress>
      </b-col>
      <b-col lg="2" cols="2" md="2">
        <span>12%</span>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import CountryMap from "./CountryMap";

export default {
  name: "CountryVisits",
  data: () => ({
    title: "CountryVisits",
  }),
  components: {
    CountryMap,
  },
};
</script>