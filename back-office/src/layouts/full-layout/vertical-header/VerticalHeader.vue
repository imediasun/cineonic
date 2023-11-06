<template>
  <header class="topbar">
    <b-navbar
      toggleable="lg"
      :type="`${navbarColor == 'white' ? 'light' : 'dark'}`"
      class="p-0"
      :variant="navbarColor"
    >
      <b-navbar-nav
        ><b-nav-item @click="showMobileSidebar" class="d-block d-lg-none"
          ><i class="mdi mdi-menu fs-3"></i></b-nav-item
      ></b-navbar-nav>
      <div :class="`navbar-header d-block d-lg-none`">
          <LogoDark v-if="navbarColor == 'white'" />
          <LogoLight v-else />
      </div>
      <b-navbar-toggle target="nav-collapse" class="mx-2 border-0"
        ><i class="ti-more"></i
      ></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="">
        <!-- -----------------------------------------------------------
          Left aligned nav items
        ----------------------------------------------------------- -->
        <b-navbar-nav>
          <!-- -----------------------------------------------------------
            Toggle Sidebar
          ----------------------------------------------------------- -->
          <b-nav-item @click="setMiniSidebar" class="d-none d-lg-block"
            ><i class="mdi mdi-menu fs-3"></i
          ></b-nav-item>

          <!-- -----------------------------------------------------------
            Mega Dropdown
          ----------------------------------------------------------- -->
          <b-nav-item-dropdown left no-caret class="two-column-dd">
            <template #button-content>
              <i class="mdi mdi-airplay fs-7 d-block d-md-none"></i>
            </template>
            <b-row class="no-gutters">
              <b-col cols="6" class="border-right">
                <b-dropdown-item class="text-center" to="/apps/chat">
                  <feather type="message-circle" class="mt-3"></feather>
                  <h5 class="card-title mb-0 mt-2">Chats</h5>
                  <p class="text-muted pb-2">Connect with the world</p>
                </b-dropdown-item>
              </b-col>
              <b-col cols="6">
                <b-dropdown-item class="text-center" to="/apps/email/inbox">
                  <feather type="mail" class="mt-3"></feather>
                  <h5 class="card-title mb-0 mt-2">Email</h5>
                  <p class="text-muted pb-2">Compose new email</p>
                </b-dropdown-item>
              </b-col>
              <b-col cols="6" class="border-right border-top">
                <b-dropdown-item class="text-center" to="/apps/contactslist">
                  <feather type="phone" class="mt-3"></feather>
                  <h5 class="card-title mb-0 mt-2">Contact List</h5>
                  <p class="text-muted pb-2">Add new contact</p>
                </b-dropdown-item>
              </b-col>
              <b-col cols="6" class="border-top">
                <b-dropdown-item class="text-center" to="/apps/ecommerce">
                  <feather type="shopping-cart" class="mt-3"></feather>
                  <h5 class="card-title mb-0 mt-2">Ecommerce</h5>
                  <p class="text-muted pb-2">Buy a new product</p>
                </b-dropdown-item>
              </b-col>
            </b-row>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- -----------------------------------------------------------
          Right aligned nav items
        ----------------------------------------------------------- -->
        <b-navbar-nav class="ml-auto">
          <!-- -----------------------------------------------------------
            Language Dropdown
          ----------------------------------------------------------- -->

          <!-- -----------------------------------------------------------
            Notification Dropdown
          ----------------------------------------------------------- -->

          <!-- -----------------------------------------------------------
            Message Dropdown
          ----------------------------------------------------------- -->

          <!-- -----------------------------------------------------------
            Profile Dropdown
          ----------------------------------------------------------- -->
          <b-nav-item-dropdown right no-caret class="mailbox">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img
                src="../../../assets/images/users/1.jpg"
                alt="user"
                class="rounded-circle"
                width="31"
              />
            </template>
            <b-dropdown-text class="bg-primary text-white">
              <div class="d-flex align-items-center py-2">
                <b-img
                  src="@/assets/images/users/1.jpg"
                  width="50"
                  rounded="circle"
                />
                <div class="ml-3">

                  <h4 class="mb-0">Cinionic NV</h4>
                  <span class="font-weight-light">{{user.email}}</span>

                </div>
              </div>
            </b-dropdown-text>
            <b-dropdown-item href="/authentication/forgotpassword" class="d-flex align-items-center">
              <feather type="user" class="feather-sm mr-2 mb-n1"></feather>
              Reset Password
            </b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="store().commit('SET_LOGOUT')" href="#" class="d-flex align-items-center">
              <feather type="log-out" class="feather-sm mr-2 mb-n1"></feather>
              Sign out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import { mapState } from "vuex";
import LogoDark from "../logo-dark/LogoDark";
import LogoLight from "../logo-light/LogoLight";

import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";
import img3 from "../../../assets/images/users/3.jpg";
import img4 from "../../../assets/images/users/4.jpg";
import store from "../../../store/Store"

export default {
  name: "vertical-header",
  data: () => ({
    showToggle: false,
    notifications: [
      {
        btnbg: "danger",
        btnicon: "user",
        title: "Launch Admin",
        subtext: "Just see the my new admin!",
        time: "9:30AM",
      },
      {
        btnbg: "success",
        btnicon: "calendar",
        title: "Event today",
        subtext: "Just a reminder that you have event",
        time: "1:30PM",
      },
      {
        btnbg: "primary",
        btnicon: "settings",
        title: "Settings",
        subtext: "You can customize this template as you want",
        time: "9:30AM",
      },
      {
        btnbg: "info",
        btnicon: "bell",
        title: "New Message",
        subtext: "Sent you an notification",
        time: "1:30PM",
      },
    ],
    messages: [
      {
        btnbg: img1,
        badgebg: "danger",
        title: "Launch Admin",
        subtext: "Just see the my new admin!",
        time: "9:30AM",
      },
      {
        btnbg: img2,
        badgebg: "success",
        title: "Event today",
        subtext: "Just a reminder that you have event",
        time: "1:30PM",
      },
      {
        btnbg: img3,
        badgebg: "primary",
        title: "Settings",
        subtext: "You can customize this template as you want",
        time: "9:30AM",
      },
      {
        btnbg: img4,
        badgebg: "warning",
        title: "New Message",
        subtext: "Sent you an notification",
        time: "1:30PM",
      },
    ],
    href() {
      return undefined;
    },
  }),
  components: {
    LogoDark,
    LogoLight,
  },
  computed: {
    ...mapState(["navbarColor", "logoColor", "LayoutType", "user"]),
    getCurrentLanguage() {
      const locale = this.$i18n.locale;
      if (locale == "en") return { lang: "flag-icon flag-icon-us" };
      else if (locale == "fr") return { lang: "flag-icon flag-icon-fr" };
      else if (locale == "ch") return { lang: "flag-icon flag-icon-ch" };
      else if (locale == "gr") return { lang: "flag-icon flag-icon-gr" };
      return this.locale;
    },
  },
  methods: {
    store() {
      return store
    },
    showMobileSidebar() {
      this.$store.commit("SET_SIDEBAR_DRAWER", true);
    },
    setMiniSidebar() {
      if (this.LayoutType == "full-sidebar") {
        this.$store.dispatch("setLayoutType", "mini-sidebar");
      } else if (this.LayoutType == "mini-sidebar") {
        this.$store.dispatch("setLayoutType", "full-sidebar");
      }
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    },
  },
};
</script>
