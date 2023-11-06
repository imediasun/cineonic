<template>
  <div>
    <b-table
      responsive
      class="mb-0 mt-3"
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
      table-class="bg-transparent text-nowrap"
    >
      <!-- <template #cell(id)="data"> #{{ data.item.id }} </template> -->
      <template #cell(user)="data">
        <div class="d-flex align-items-center">
          <b-img
            :src="require('@/assets/images/users/' + data.item.user.image)"
            rounded="circle"
            :alt="data.item.user.image"
            width="45"
          />
          <div class="ml-3">
            <h6 class="fw-medium mb-0">
              {{ data.item.user.first }} {{ data.item.user.last }}
            </h6>
            <span>{{ data.item.user.email }}</span>
          </div>
        </div>
      </template>
      <template #cell(team)="data">
        <b-img
          :src="require('@/assets/images/users/' + data.item.team.teamimg1)"
          rounded="circle"
          :alt="data.item.team.teamimg1"
          width="35"
          class="mr-n2 border border-white"
        />
        <b-img
          :src="require('@/assets/images/users/' + data.item.team.teamimg2)"
          rounded="circle"
          :alt="data.item.team.teamimg2"
          width="35"
          class="mr-n2 border border-white card-hover"
        />
        <b-img
          :src="require('@/assets/images/users/' + data.item.team.teamimg3)"
          rounded="circle"
          :alt="data.item.team.teamimg3"
          width="35"
          class="border border-white"
        />
      </template>
      <template #cell(status)="data">
        <span :class="data.item.status">
          <i class="fa fa-circle"></i>
        </span>
      </template>
      <template #cell(budget)="data">
        <span class="fw-medium">{{ data.item.budget }}</span>
      </template>
    </b-table>
    <div class="d-md-flex align-items-center mt-3 mt-lg-0">
      <b-form-group
        label="Per page"
        label-for="per-page-select"
        label-cols-sm="6"
        label-cols-md="5"
        label-cols-lg="9"
        label-size="sm"
        label-class="fw-medium"
        class="mb-0"
      >
        <b-form-select
          id="per-page-select"
          v-model="perPage"
          :options="pageOptions"
          size="sm"
        ></b-form-select>
      </b-form-group>
      <div class="ml-auto mt-2 mt-md-0">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          class="my-0"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MonthTable",
  data: () => ({
    title: "MonthTable",

    fields: [
      {
        key: "user",
        label: "Full Name",
      },
      {
        key: "project",
        label: "Project Name",
      },
      {
        key: "team",
        label: "Team Members",
      },
      {
        key: "status",
        label: "Status",
      },
      {
        key: "weeks",
        label: "Weeks",
      },
      {
        key: "budget",
        label: "Budget",
      },
    ],
    items: [
      {
        user: {
          image: "1.jpg",
          first: "Dickerson",
          last: "Macdonald",
          email: "dicker@gmail.com",
        },
        project: "Xtreme Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "2.jpg",
          first: "Larsen",
          last: "Shaw",
          email: "larsen@gmail.com",
        },
        project: "Severny Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "3.jpg",
          first: "Geneva",
          last: "Wilson",
          email: "wilson@gmail.com",
        },
        project: "Adminpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "4.jpg",
          first: "Jami",
          last: "Carney",
          email: "jami@gmail.com",
        },
        project: "Adminwrap Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "5.jpg",
          first: "Dickerson",
          last: "Macdonald",
          email: "dicker@gmail.com",
        },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-primary",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "6.jpg",
          first: "Larsen",
          last: "Shaw",
          email: "shaw@gmail.com",
        },
        project: "Ample React Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "7.jpg",
          first: "Geneva",
          last: "Wilson",
          email: "wilson@gmail.com",
        },
        project: "Materialpro Vuetify Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "1.jpg",
          first: "Jami",
          last: "Carney",
          email: "carney@gmail.com",
        },
        project: "Monster Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "2.jpg",
          first: "Dickerson",
          last: "Macdonald",
          email: "dicker@gmail.com",
        },
        project: "Adminpro React Redux Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-primary",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "3.jpg",
          first: "Larsen",
          last: "Shaw",
          email: "shaw@gmail.com",
        },
        project: "Elegant Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "4.jpg",
          first: "Geneva",
          last: "Wilson",
          email: "dicker@gmail.com",
        },
        project: "Severny Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "5.jpg",
          first: "Jami",
          last: "Carney",
          email: "jami@gmail.com",
        },
        project: "Xtreme Vuesax Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "6.jpg",
          first: "Dickerson",
          last: "Macdonald",
          email: "dicker@gmail.com",
        },
        project: "Monster Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "7.jpg",
          first: "Larsen",
          last: "Shaw",
          email: "shaw@gmail.com",
        },
        project: "Xtreme Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-primary",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "1.jpg",
          first: "Geneva",
          last: "Wilson",
          email: "geneva@gmail.com",
        },
        project: "Materialpro Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "2.jpg",
          first: "Jami",
          last: "Carney",
          email: "jami@gmail.com",
        },
        project: "Elite Bootstrap Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "3.jpg",
          first: "Dickerson",
          last: "Macdonald",
          email: "dicker@gmail.com",
        },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "2.jpg",
          teamimg2: "4.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "4.jpg",
          first: "Larsen",
          last: "Shaw",
          email: "shaw@gmail.com",
        },
        project: "Ample Angular Admin",
        team: {
          teamimg1: "3.jpg",
          teamimg2: "6.jpg",
          teamimg3: "5.jpg",
        },
        status: "text-primary",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "5.jpg",
          first: "Geneva",
          last: "Wilson",
          email: "wilson@gmail.com",
        },
        project: "Nice Angular Admin",
        team: {
          teamimg1: "d1.jpg",
          teamimg2: "d2.jpg",
          teamimg3: "d3.jpg",
        },
        status: "text-success",
        weeks: "35",
        budget: "$96K",
      },
      {
        user: {
          image: "6.jpg",
          first: "Jami",
          last: "Carney",
          email: "jami@gmail.com",
        },
        project: "Xtreme Angular Admin",
        team: {
          teamimg1: "1.jpg",
          teamimg2: "2.jpg",
          teamimg3: "3.jpg",
        },
        status: "text-orange",
        weeks: "35",
        budget: "$96K",
      },
    ],
    totalRows: 1,
    currentPage: 1,
    perPage: 5,
    pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
  }),
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
};
</script>