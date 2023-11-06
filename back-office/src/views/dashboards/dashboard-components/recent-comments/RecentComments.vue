<template>
  <div>
    <!-- Header -->
    <div>
      <VuePerfectScrollbar class="scrlbar" style="height: 500px">
        <div>
          <div
            class="comment-widgets mb-2 position-relative"
            v-for="comment in comments"
            :comment="comment"
            :key="comment.commenttitle"
          >
            <!-- Comment Row -->
            <div class="d-flex flex-row comment-row mt-0 p-3 my-2">
              <div class="p-2">
                <img
                  :src="require('@/assets/images/users' + comment.img)"
                  alt="user"
                  width="50"
                  class="rounded-circle"
                />
              </div>
              <div
                class="comment-text w-100 pl-3"
                :class="[comment.activeClass]"
              >
                <h6 class="font-medium">{{ comment.username }}</h6>
                <span class="mb-3 d-block mt-2">{{ comment.desc }}</span>
                <div class="comment-footer">
                  <span class="text-muted float-right">{{ comment.date }}</span>
                  <b-badge
                    pill
                    class="px-2 font-weight-normal"
                    :class="[comment.badgebg]"
                    >{{ comment.status }}</b-badge
                  >
                  <span class="action-icons">
                    <a
                      href="javascript:void(0)"
                      class="pl-2 text-decoration-none align-middle"
                    >
                      <i class="ti-pencil-alt"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="pl-2 text-decoration-none align-middle"
                    >
                      <i class="ti-check"></i>
                    </a>
                    <a
                      href="javascript:void(0)"
                      class="pl-2 text-decoration-none align-middle"
                    >
                      <i class="ti-heart"></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VuePerfectScrollbar>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  name: "RecentComments",
  props: {
    comment: Object,
  },
  data: () => ({
    title: "RecentComments",
    comments: [
      {
        img: "/1.jpg",
        activeClass: "",
        username: "James Anderson",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2021",
        badgebg: "bg-primary",
        status: "Pending",
      },
      {
        img: "/2.jpg",
        activeClass: "",
        username: "Michael Jorden",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2021",
        badgebg: "bg-success",
        status: "Approved",
      },
      {
        img: "/3.jpg",
        activeClass: "active",
        username: "Johnathan Doeting",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2021",
        badgebg: "bg-danger",
        status: "Rejected",
      },
      {
        img: "/4.jpg",
        activeClass: "",
        username: "James Anderson",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2021",
        badgebg: "bg-primary",
        status: "Pending",
      },
      {
        img: "/5.jpg",
        activeClass: "",
        username: "Michael Jorden",
        desc:
          "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
        date: "April 14, 2021",
        badgebg: "bg-success",
        status: "Approved",
      },
    ],
  }),
  components: {
    VuePerfectScrollbar,
  },
};
</script>