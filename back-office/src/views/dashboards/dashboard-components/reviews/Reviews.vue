<template>
  <div>
    <b-row>
      <b-col lg="4" cols="12" md="4" class="border-right">
        <h4 class="card-title">Reviews</h4>
        <h5 class="card-subtitle font-weight-normal text-muted">
          Overview of Review
        </h5>
        <h2 class="font-medium mt-5 mb-0">25426</h2>
        <span class="text-muted">This month we got 346 New Reviews</span>
        <div class="image-box mt-4 mb-4 d-flex">
          <a
            href="javascript:void(0)"
            v-for="review in reviews"
            v-b-tooltip.hover
            :title="review.tooltiptext"
            :key="review.reviewtitle"
            class="mr-2"
          >
            <img
              :src="require('@/assets/images/users' + review.img)"
              alt="user"
              class="rounded-circle"
              width="45"
            />
          </a>
        </div>
        <b-button variant="primary" size="lg" class="px-3"
          >Checkout All Reviews</b-button
        >
      </b-col>
      <b-col lg="8" cols="12" md="8">
        <ul class="list-inline ml-4">
          <li
            class="mt-4"
            v-for="reaction in reactions"
            :reaction="reaction"
            :key="reaction.reactiontitle"
          >
            <div class="d-flex align-items-center">
              <i
                class="display-4 text-muted"
                :class="[reaction.clientreview]"
              ></i>
              <div class="ml-2">
                <h5 class="mb-0">{{ reaction.reviewtext }}</h5>
                <span class="text-muted">{{ reaction.reviewno }}</span>
              </div>
            </div>
            <b-progress
              :value="reaction.percent"
              :variant="reaction.reviewcolor"
              max="100"
              class="mb-3"
            ></b-progress>
          </li>
        </ul>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Reviews",
  props: {
    review: Object,
  },
  data: () => ({
    title: "Reviews",
    reviews: [
      {
        tooltiptext: "Simmons",
        img: "/1.jpg",
      },
      {
        tooltiptext: "Fitz",
        img: "/2.jpg",
      },
      {
        tooltiptext: "Phil",
        img: "/3.jpg",
      },
      {
        tooltiptext: "Melinda",
        img: "/4.jpg",
      },
    ],
    reactions: [
      {
        clientreview: "mdi mdi-emoticon-happy",
        reviewtext: "Positive Reviews",
        reviewno: "25547 Reviews",
        percent: 47,
        reviewcolor: "success",
      },
      {
        clientreview: "mdi mdi-emoticon-sad",
        reviewtext: "Negative Reviews",
        reviewno: "5547 Reviews",
        percent: 33,
        reviewcolor: "warning",
      },
      {
        clientreview: "mdi mdi-emoticon-neutral",
        reviewtext: "Neutral Reviews",
        reviewno: "547 Reviews",
        percent: 20,
        reviewcolor: "primary",
      },
    ],
  }),
};
</script>