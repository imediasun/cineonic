<template>
  <header class="topbar">
    <b-navbar
      toggleable="lg"
      :type="`${navbarColor == 'white' ? 'light' : 'dark'}`"
      class="p-0"
      :variant="navbarColor"

    >
      <div class="container-fluid">
        <b-navbar-nav
          ><b-nav-item @click="showMobileSidebar" class="d-block d-lg-none"
            ><i class="mdi mdi-menu fs-3"></i></b-nav-item
        ></b-navbar-nav>
        <div class="mx-2">
          <LogoDark v-if="navbarColor == 'white'" />
          <LogoLight v-else />
        </div>
        <b-collapse id="nav-collapse" is-nav class=""  style="background: rgb(2,0,36);
              background: linear-gradient(222deg, rgba(2,0,36,1) 0%, rgba(7,6,15,1) 35%, rgba(54,111,122,1) 100%);">
          <b-navbar-nav>
            <!-- -----------------------------------------------------------
            Mega Dropdown
          ----------------------------------------------------------- -->
            <b-nav-item-dropdown left no-caret class="two-column-dd">
              <template #button-content>
                <i class="mdi mdi-airplay fs-7 d-block d-md-none"></i>
                <span class="d-none d-md-block"
                  >Go To <i class="fa fa-angle-down"></i
                ></span>
              </template>
              <b-row class="no-gutters">
                <b-col cols="6" class="border-right">
                  <b-dropdown-item class="text-center" to="/apps/chat">
                    <feather type="message-circle" class="mt-2"></feather>
                    <h5 class="card-title mb-0 mt-2">Chats</h5>
                    <p class="text-muted">Connect with the world</p>
                  </b-dropdown-item>
                </b-col>
                <b-col cols="6">
                  <b-dropdown-item class="text-center" to="/apps/email/inbox">
                    <feather type="mail" class="mt-2"></feather>
                    <h5 class="card-title mb-0 mt-2">Email</h5>
                    <p class="text-muted">Compose new email</p>
                  </b-dropdown-item>
                </b-col>
                <b-col cols="6" class="border-right border-top">
                  <b-dropdown-item class="text-center" to="/apps/contactslist">
                    <feather type="phone" class="mt-2"></feather>
                    <h5 class="card-title mb-0 mt-2">Contact List</h5>
                    <p class="text-muted">Add new contact</p>
                  </b-dropdown-item>
                </b-col>
                <b-col cols="6" class="border-top">
                  <b-dropdown-item class="text-center" to="/apps/ecommerce">
                    <feather type="shopping-cart" class="mt-2"></feather>
                    <h5 class="card-title mb-0 mt-2">Ecommerce</h5>
                    <p class="text-muted">Buy a new product</p>
                  </b-dropdown-item>
                </b-col>
              </b-row>
            </b-nav-item-dropdown>

            <!-- -----------------------------------------------------------
            Create New Dropdown
          ----------------------------------------------------------- -->
          </b-navbar-nav>

          <!-- Right aligned nav items -->
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
                    <h4 class="mb-0">Steave Jobs</h4>
                    <span class="font-weight-light">varun@gmail.com</span>
                  </div>
                </div>
              </b-dropdown-text>
              <b-dropdown-item href="#" class="d-flex align-items-center">
                <feather type="user" class="feather-sm mr-2 mb-n1"></feather>
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#" class="d-flex align-items-center">
                <feather type="mail" class="feather-sm mr-2 mb-n1"></feather>
                Inbox
              </b-dropdown-item>
              <b-dropdown-item href="#" class="d-flex align-items-center">
                <feather
                  type="message-circle"
                  class="feather-sm mr-2 mb-n1"
                ></feather>
                Chat
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#" class="d-flex align-items-center">
                <feather
                  type="settings"
                  class="feather-sm mr-2 mb-n1"
                ></feather>
                Settings
              </b-dropdown-item>
              <b-dropdown-item href="#" class="d-flex align-items-center">
                <feather type="log-out" class="feather-sm mr-2 mb-n1"></feather>
                Sign out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import { mapState } from "vuex";
import LogoDark from "../logo-dark/LogoDark";
import LogoLight from "../logo-light/LogoLight";

export default {
  name: "Horizontal-header",
  data: () => ({
    showToggle: false,
    href() {
      return undefined;
    },
  }),
  components: {
    LogoDark,
    LogoLight,
  },
  computed: {
    ...mapState(["navbarColor", "logoColor", "LayoutType"]),
  },
  methods: {
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
  },
};
</script>
