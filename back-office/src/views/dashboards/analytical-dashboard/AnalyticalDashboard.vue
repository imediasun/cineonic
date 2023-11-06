<template>
  <b-row>
    <!-- --------------------------------------------------------- 
    Wallter balance
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <WalletBalance></WalletBalance>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Referral Earnings
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <ReferralEarnings></ReferralEarnings>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Estimated Sales
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <EstimatedSales></EstimatedSales>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Realtime Visits
    --------------------------------------------------------- -->
    <b-col lg="12" cols="12" md="12">
      <b-card no-body class="mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center card-body">
          <div>
            <h4 class="card-title">Realtime Visits</h4>
            <h5 class="card-subtitle text-muted font-weight-normal">
              Overview of Latest Month
            </h5>
          </div>
          <div class="ml-auto mt-2 mt-md-0">
            <b-form-select
              :options="visitsoptions1"
              v-model="visits1"
            ></b-form-select>
          </div>
        </div>
        <RealTimeVisits></RealTimeVisits>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Active Users
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h4 class="card-title">Active Users</h4>
        <ActiveUsers></ActiveUsers>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Device Visit
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h4 class="card-title">Device Visit</h4>
        <DeviceVisits></DeviceVisits>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Visitors By Countries
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h4 class="card-title">Visitors By Countries</h4>
        <div style="height: 200px">
          <App
            :countryData="countryData"
            defaultCountryFillColor="#93d5ed"
            highColor="#2961ff"
            lowColor="#2961ff"
            countryStrokeColor="transparent"
          />
        </div>
        <CountryVisits></CountryVisits>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Top Selling Products
    --------------------------------------------------------- -->
    <b-col cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100" no-body>
        <!-- Header -->
        <div class="d-md-flex align-items-center card-body">
          <div>
            <h4 class="card-title">Top Selling Products</h4>
            <h5 class="card-subtitle text-muted font-weight-normal">
              Overview of Latest Month
            </h5>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="sellingoptions1" v-model="selling1">
            </b-form-select>
          </div>
        </div>
        <SellingProduct></SellingProduct>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Recent Comments
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="p-3">
          <h4 class="card-title mb-0">Recent Comments</h4>
        </div>
        <RecentComments></RecentComments>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Recent Chats
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="p-3">
          <h4 class="card-title mb-0">Recent Chats</h4>
        </div>
        <RecentChats></RecentChats>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
// -----------------------------------------
// Import Components Here
// -----------------------------------------
import WalletBalance from "../../widgets/chart-widgets/wallet-balance/WalletBalance";
import ReferralEarnings from "../../widgets/chart-widgets/referral-earnings/ReferralEarnings";
import EstimatedSales from "../../widgets/chart-widgets/estimated-sales/EstimatedSales";
import RealTimeVisits from "../../widgets/chart-widgets/realtime-visits/RealTimeVisits";
import ActiveUsers from "../../widgets/chart-widgets/active-users/ActiveUsers";
import DeviceVisits from "../../widgets/chart-widgets/device-visit/DeviceVisit";
import CountryVisits from "../dashboard-components/country-visit/CountryVisit";
import SellingProduct from "../dashboard-components/selling-product/SellingProduct";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import RecentChats from "../dashboard-components/recent-chats/RecentChats";

import App from "vue-world-map";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "AnalyticalDashboard",
  data: () => ({
    title: "AnalyticalDashboard",
    // real time visits
    visits1: 0,
    visitsoptions1: [
      { text: "Monthly", value: "0" },
      { text: "Daily", value: "1" },
      { text: "Weekly", value: "2" },
      { text: "Yearly", value: "3" },
    ],
    // top selling
    selling1: 0,
    sellingoptions1: [
      { text: "Monthly", value: 0 },
      { text: "Daily", value: 1 },
      { text: "Weekly", value: 2 },
      { text: "Yearly", value: 3 },
    ],
    countryData: {
      US: 100,
      IN: 200,
    },
  }),
  components: {
    WalletBalance,
    ReferralEarnings,
    EstimatedSales,
    RealTimeVisits,
    ActiveUsers,
    DeviceVisits,
    RecentComments,
    RecentChats,
    CountryVisits,
    SellingProduct,
    App,
  },
};
</script>