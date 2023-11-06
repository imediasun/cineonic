<template>
  <b-row>
    <!-- --------------------------------------------------------- 
    Earnings
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="card-body">
          <h4 class="card-title">Earnings</h4>
          <h5 class="card-subtitle font-weight-normal text-muted mb-2">
            Total Earnings of the Month
          </h5>
          <h2 class="font-medium mb-0">$43,567.53</h2>
        </div>
        <Earnings></Earnings>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Overview
    --------------------------------------------------------- -->
    <b-col lg="8" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="card-body">
          <h4 class="card-title">Overview</h4>
          <h5 class="card-subtitle font-weight-normal text-muted mb-0">
            Total Earnings of the Month
          </h5>
        </div>
        <Overview></Overview>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Product Sales
    --------------------------------------------------------- -->
    <b-col lg="12" cols="12" md="12">
      <b-card class="mb-4">
        <div>
          <h4 class="card-title">Product Sales</h4>
          <h5 class="card-subtitle font-weight-normal text-muted">
            Total Earnings of the Month
          </h5>
        </div>
        <ProductSales></ProductSales>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Products of the Month
    --------------------------------------------------------- -->
    <b-col lg="8" cols="12" md="12">
      <b-card class="mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title">Products of the Month</h4>
            <h5 class="card-subtitle text-muted font-weight-normal">
              Overview of Latest Month
            </h5>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="monthoptions1" v-model="month1">
            </b-form-select>
          </div>
        </div>
        <!-- Content -->
        <ProductTable></ProductTable>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Order Stats
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12">
      <b-card class="mb-4" no-body>
        <div class="card-body">
          <h4 class="card-title">Order Stats</h4>
          <h5 class="card-subtitle font-weight-normal text-muted">
            Overview of orders
          </h5>
        </div>
        <OrderStats></OrderStats>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Reviews
    --------------------------------------------------------- -->
    <b-col lg="12" cols="12" md="12">
      <b-card class="mb-4">
        <Reviews></Reviews>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
// -----------------------------------------
// Import Components Here
// -----------------------------------------
import Earnings from "../../widgets/chart-widgets/earnings/Earnings";
import Overview from "../dashboard-components/overview/Overview";
import ProductSales from "../../widgets/chart-widgets/product-sales/ProductSales";
import ProductTable from "../dashboard-components/product-table/ProductTable";
import OrderStats from "../../widgets/chart-widgets/order-stats/OrderStats";
import Reviews from "../dashboard-components/reviews/Reviews";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "EcommerceDashboard",
  data: () => ({
    title: "EcommerceDashboard",
    // Month Table
    month1: 0,
    monthoptions1: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
  }),
  components: {
    Earnings,
    Overview,
    ProductSales,
    ProductTable,
    OrderStats,
    Reviews,
  },
};
</script>