<template>
  <b-row>
    <!-- --------------------------------------------------------- 
    Sales Summary
    --------------------------------------------------------- -->
    <b-col cols="12">
      <b-card class="mb-4" no-body>
        <SalesSummery></SalesSummery>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Email Campaigns
    --------------------------------------------------------- -->
    <b-col lg="8" cols="12" md="12">
      <b-card class="mb-4">
        <EmailCampaign></EmailCampaign>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Active Visitors
    --------------------------------------------------------- -->
    <b-col lg="4" cols="12" md="12">
      <b-card class="mb-4">
        <ActiveVisitors></ActiveVisitors>
      </b-card>
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
        <h4 class="card-title mb-2 pb-1">Bounce Rate</h4>
        <BounceRate></BounceRate>
      </b-card>
    </b-col>
    <!-- --------------------------------------------------------- 
    Projects of the Month
    --------------------------------------------------------- -->
    <b-col cols="12">
      <b-card class="mb-4">
        <!-- Header -->
        <div class="d-md-flex align-items-center pb-0">
          <div>
            <h4 class="card-title">Projects of the Month</h4>
            <h5 class="card-subtitle text-muted font-weight-normal">
              Overview of Latest Month
            </h5>
          </div>
          <div class="ml-auto mt-2 mt-md-0">
            <b-form-select
              :options="monthoptions1"
              v-model="month1"
            ></b-form-select>
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
import SalesSummery from "../dashboard-components/sales-summery/SalesSummery";
import EmailCampaign from "../dashboard-components/email-campaign/EmailCampaign";
import ActiveVisitors from "../dashboard-components/active-visitors/ActiveVisitors";
import MonthTable from "../dashboard-components/month-table/MonthTable";
import RevenueStatics from "../../widgets/chart-widgets/revenue-statics/RevenueStatics";
import PageViews from "../../widgets/chart-widgets/page-views/PageViews";
import RecentComments from "../dashboard-components/recent-comments/RecentComments";
import RecentChats from "../dashboard-components/recent-chats/RecentChats";
import BounceRate from "../../widgets/chart-widgets/bounce-rate/BounceRate";

// -----------------------------------------
// Export Here
// -----------------------------------------
export default {
  name: "ClassicDashboard",
  data: () => ({
    title: "ClassicDashboard",
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
    SalesSummery,
    EmailCampaign,
    ActiveVisitors,
    MonthTable,
    RevenueStatics,
    PageViews,
    RecentComments,
    RecentChats,
    BounceRate,
  },
};
</script>