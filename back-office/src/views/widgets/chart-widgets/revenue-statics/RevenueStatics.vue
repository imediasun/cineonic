<template>
  <div>
    <h4 class="card-title text-white">Revenue Statistics</h4>
    <b-row>
      <b-col lg="6" cols="6" sm="6">
        <div style="width:150px">
          <vue-apex-charts
            type="bar"
            :options="RevenueStaticsChart.revenueChart.chartOptions"
            :series="RevenueStaticsChart.revenueChart.series"
          ></vue-apex-charts>
        </div>
      </b-col>
      <b-col
        lg="6"
        cols="6"
        sm="6"
        class="d-flex align-items-center justify-content-end"
      >
        <div>
          <h2 class="fw-medium text-white mb-0">$351</h2>
          <span class="text-white op-5">Jan 10 - Jan 20</span>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import RevenueStaticsChart from "./RevenueStaticsData";

export default {
  name: "RevenueStatics",
  data: () => ({
    title: "RevenueStatics",
    RevenueStaticsChart: RevenueStaticsChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>