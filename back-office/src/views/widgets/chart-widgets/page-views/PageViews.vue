<template>
  <div>
    <vue-apex-charts
      type="area"
      height="112px"
      :options="PageViewChart.viewChart.chartOptions"
      :series="PageViewChart.viewChart.series"
    ></vue-apex-charts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import PageViewChart from "./PageViewsData";

export default {
  name: "PageViews",
  data: () => ({
    title: "PageViews",
    PageViewChart: PageViewChart,
  }),
  components: {
    VueApexCharts,
  },
};
</script>