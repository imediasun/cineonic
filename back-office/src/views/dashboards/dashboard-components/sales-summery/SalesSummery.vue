<template>
  <div>
    <div class="card-body">
      <!-- Header -->
      <div class="d-md-flex align-items-center">
        <div>
          <h4 class="card-title">Sales Summary</h4>
          <h5 class="card-subtitle text-muted font-weight-normal">
            Overview of Latest Month
          </h5>
        </div>
        <div class="ml-auto d-flex no-block align-items-center m-2 mt-md-0">
          <ul class="list-group list-group-horizontal font-12 mr-3 mb-0">
            <li
              class="list-group-item text-info border-0 p-0 d-flex align-items-center mr-2"
            >
              <i class="mdi mdi-checkbox-blank-circle mr-1"></i> Iphone
            </li>
            <li
              class="list-group-item text-primary border-0 p-0 d-flex align-items-center"
            >
              <i class="mdi mdi-checkbox-blank-circle mr-1"></i> Ipad
            </li>
          </ul>
          <b-form-select
            :options="salesoptions1"
            v-model="sales1"
          ></b-form-select>
        </div>
      </div>
      <!-- Chart and Data Section -->
      <b-row class="justify-content-center">
        <b-col lg="4" cols="12" md="4">
          <h1 class="mb-0 mt-4">$6,890.68</h1>
          <h6 class="font-weight-light text-muted">Current Month Earnings</h6>
          <h3 class="mt-4 mb-0">1,540</h3>
          <h6 class="font-weight-light text-muted">Current Month Sales</h6>
          <b-button variant="primary" class="mt-3 p-3 pl-4 pr-4 mb-3 py-3"
            >Last Month Summary</b-button
          >
        </b-col>
        <b-col cols="12" lg="8" md="8">
          <div class="d-flex flex-column w-100">
            <vue-apex-charts
              type="area"
              height="250"
              :options="apexChartData.lineAreaChartSpline.chartOptions"
              :series="apexChartData.lineAreaChartSpline.series"
            ></vue-apex-charts>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- Footer -->
    <MonthlyProfitList :totalincomes="totalincomes"></MonthlyProfitList>
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";
import apexChartData from "../../../charts/apexcharts/ApexChartsData";
import MonthlyProfitList from "../monthly-profit-list/MonthlyProfitList";
export default {
  name: "SalesSummery",
  data: () => ({
    title: "SalesSummery",
    sales1: 0,
    salesoptions1: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
    apexChartData: apexChartData,
    // Data for TotalIncome
    totalincomes: [
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        iconcolor: "text-warning",
        icon: "mdi mdi-wallet",
        textcolor: "text-dark",
        text: "Wallet Balance",
        money: "$3,567.53",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        iconcolor: "text-info",
        icon: "mdi mdi-star-circle",
        textcolor: "text-dark",
        text: "Referral Earnings",
        money: "$769.08",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        iconcolor: "text-primary",
        icon: "mdi mdi-shopping",
        textcolor: "text-dark",
        text: "Estimate Sales",
        money: "5489",
      },
      {
        gridlg: "col-lg-3",
        gridsm: "col-md-6",
        iconcolor: "text-success",
        icon: "mdi mdi-currency-usd",
        textcolor: "text-dark",
        text: "Earnings",
        money: "$23,568.90",
      },
    ],
  }),
  components: {
    VueApexCharts,
    MonthlyProfitList,
  },
};
</script>