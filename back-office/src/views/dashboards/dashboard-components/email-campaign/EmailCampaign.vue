<template>
  <div>
    <!-- Header -->
    <div class="d-md-flex align-items-center">
      <div>
        <h4 class="card-title">Email Campaigns</h4>
        <h5 class="card-subtitle text-muted font-weight-normal">
          Overview of Email Campaigns
        </h5>
      </div>
      <div class="ml-auto mt-2 mt-md-0 d-flex no-block align-items-center">
        <b-form-select
          :options="emailoptions1"
          v-model="email1"
        ></b-form-select>
      </div>
    </div>
    <!-- Chart and details section -->
    <b-row class="mt-5 pt-4">
      <b-col lg="6" xs="12" sm="6">
        <div class="d-flex flex-column w-100">
          <vue-apex-charts
            type="donut"
            height="250"
            :options="apexChartData.donutChart.chartOptions"
            :series="apexChartData.donutChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
      <b-col lg="6" xs="12" sm="6">
        <h1 class="display-6 mb-0 font-medium">45%</h1>
        <span>Open Ratio for Campaigns</span>
        <ul class="list-inline">
          <li class="mt-3">
            <i
              class="mdi mdi-checkbox-blank-circle mr-1 text-muted font-12"
            ></i>
            Open Ratio
            <span class="float-right">45%</span>
          </li>
          <li class="mt-3">
            <i
              class="mdi mdi-checkbox-blank-circle mr-1 text-orange font-12"
            ></i>
            Clicked Ratio
            <span class="float-right">14%</span>
          </li>
          <li class="mt-3">
            <i class="mdi mdi-checkbox-blank-circle mr-1 text-info font-12"></i>
            Un-Open Ratio
            <span class="float-right">25%</span>
          </li>
          <li class="mt-3">
            <i
              class="mdi mdi-checkbox-blank-circle mr-1 text-primary font-12"
            ></i>
            Bounced Ratio
            <span class="float-right">17%</span>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";

export default {
  name: "EmailCampaign",
  data: () => ({
    title: "EmailCampaign",
    email1: 0,
    emailoptions1: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
    apexChartData: apexChartData,
  }),
  components: {
    VueApexCharts,
  },
};
</script>