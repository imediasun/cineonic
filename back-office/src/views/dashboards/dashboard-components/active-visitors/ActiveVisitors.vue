<template>
  <div class="active-bg">
    <div class="pt-3 text-center">
      <i class="mdi mdi-file-chart display-4 text-orange d-block"></i>
      <span class="display-4 d-block fw-medium">368</span>
      <span>Active Visitors on Site</span>
      <!-- Progress -->
      <b-progress class="mt-5" :max="max">
        <b-progress-bar :value="value" variant="primary"></b-progress-bar>
        <b-progress-bar :value="value" variant="orange"></b-progress-bar>
        <b-progress-bar :value="value" variant="warning"></b-progress-bar>
      </b-progress>

      <b-row class="mt-4 mb-3">
        <b-col lg="4" cols="4" md="4" class="border-right text-left">
          <h3 class="mb-0 fw-medium">60%</h3>
          Desktop
        </b-col>
        <b-col lg="4" cols="4" md="4" class="border-right">
          <h3 class="mb-0 fw-medium">28%</h3>
          Mobile
        </b-col>
        <b-col lg="4" cols="4" md="4" class="text-right">
          <h3 class="mb-0 fw-medium">12%</h3>
          Tablet
        </b-col>
      </b-row>
      <b-button variant="primary" size="lg" class="mt-3"
        >View More Details</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "ActiveVisitors",
  data: () => ({
    title: "ActiveVisitors",
    value: 100,
    max: 100,
  }),
  components: {},
};
</script>