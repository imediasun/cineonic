<template>
  <b-row>
    <!-- --------------------------------------------------------- 
    Overview of email campaigns
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-card no-body class="mb-4">
        <div class="mb-5 p-4">
          <!-- Header -->
          <div class="d-flex align-items-center mb-3">
            <div>
              <h1 class="font-bold mb-0">$6,890.68</h1>
              <span>Overview of email campaigns</span>
            </div>
            <div class="ml-auto">
              <i class="mdi mdi-wallet text-primary display-4"></i>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            pharetra ligula, sit amet laoreet arcu.Integer.
          </p>
          <a href="javascript: void(0)" class="font-weight-bold"
            >Last Month Summary</a
          >
        </div>
        <OverviewCampaign></OverviewCampaign>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Overview of email campaigns
    --------------------------------------------------------- -->
    <b-col lg="6" cols="12" md="12">
      <b-row>
        <b-col lg="6" cols="12" md="6">
          <b-card no-body class="mb-4">
            <div class="p-3">
              <h4 class="card-title">Total Visits</h4>
              <h4 class="font-weight-bold mt-3 pb-2">3,25,346</h4>
              <h5 class="card-subtitle mb-0 font-weight-normal text-muted">
                Total Earnings of the Month
              </h5>
            </div>
            <TotalVisits></TotalVisits>
          </b-card>
        </b-col>
        <b-col lg="6" cols="12" md="6">
          <b-card no-body class="mb-4">
            <div class="p-3">
              <h4 class="card-title">Sales Ratio</h4>
              <h4 class="font-weight-bold mt-3 pb-2">35,658</h4>
              <h5 class="card-subtitle mb-0 font-weight-normal text-muted">
                Total Earnings of the Month
              </h5>
            </div>
            <SalesRatio></SalesRatio>
          </b-card>
        </b-col>
        <b-col lg="12" cols="12" md="12">
          <b-card class="mb-4">
            <TotalEarnings></TotalEarnings>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
    <!-- --------------------------------------------------------- 
    Revenue Statistics
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="bg-primary mb-4 w-100">
        <RevenueStatics></RevenueStatics>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Page Views
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card no-body class="bg-info mb-4 w-100">
        <h4 class="card-title text-white p-3 mb-0">
          <span class="mb-2 d-block">Page Views</span>
          <i class="ti-arrow-up"></i> 6548
        </h4>
        <PageViews></PageViews>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Bounce Rate
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12" class="d-flex align-items-stretch">
      <b-card class="mb-4 w-100">
        <h2 class="card-title mb-0">56.33%</h2>
        <span class>Bounce Rate</span>
        <MonthBounceRate></MonthBounceRate>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Projects of the Month
    --------------------------------------------------------- -->
    <b-col lg="12" cols="12" md="12">
      <b-card class="mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center">
          <div>
            <h4 class="card-title">Projects of the Month</h4>
            <h5 class="card-subtitle text-muted font-weight-normal">
              Overview of Latest Month
            </h5>
          </div>
          <div class="ml-auto mt-3 mt-md-0">
            <b-form-select :options="monthoptions1" v-model="month1">
            </b-form-select>
          </div>
        </div>
        <MonthTable></MonthTable>
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
import OverviewCampaign from "../../widgets/chart-widgets/overview-campaign/OverviewCampaign";
import MonthTable from "../dashboard-components/month-table/MonthTable";
import RevenueStatics from "../../widgets/chart-widgets/revenue-statics/RevenueStatics";
import PageViews from "../../widgets/chart-widgets/page-views/PageViews";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import RecentChats from "../dashboard-components/recent-chats/RecentChats";
import MonthBounceRate from "../../widgets/chart-widgets/month-bounce-rate/MonthBounceRate";
import SalesRatio from "../../widgets/chart-widgets/sales-ratio/SalesRatio";
import TotalVisits from "../../widgets/chart-widgets/total-visits/TotalVisits";
import TotalEarnings from "../../widgets/chart-widgets/total-earnings/TotalEarnings";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "GeneralDashboard",
  data: () => ({
    title: "GeneralDashboard",
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
    MonthTable,
    RevenueStatics,
    PageViews,
    RecentComments,
    RecentChats,
    MonthBounceRate,
    OverviewCampaign,
    SalesRatio,
    TotalVisits,
    TotalEarnings,
  },
};
</script>