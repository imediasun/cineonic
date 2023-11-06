<template>
  <div id="reset_password" style="min-height: calc(100vh - 20px)" tag="section">
    <b-row class="justify-content-center no-gutters">
      <b-col lg="12" class="d-flex align-items-center">
        <b-card no-body class="w-100">
          <b-row class="no-gutters" style="min-height: 100vh">
            <b-col
                lg="6"
                class="bg-primary d-md-flex align-items-center justify-content-center"
                style="background: rgb(2,0,36);
              background: linear-gradient(222deg, rgba(2,0,36,1) 0%, rgba(7,6,15,1) 35%, rgba(54,111,122,1) 100%);"
            >
              <div class="d-flex align-items-center">
                <div class="p-5">
                  <b-row class="justify-content-center">
                    <b-col cols="12" lg="9" xl="9">
                      <div>
                        <h2 class="display-5 text-white fw-medium">
                          Dont worry we will reset your password shortly !
                        </h2>
                        <p class="mt-4 text-white op-5 font-weight-normal">
                          Please fill your new password and confirm it.
                        </p>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
            <b-col
                lg="6"
                class="d-md-flex align-items-center justify-content-center"
            >
              <div class="d-flex align-items-center w-100">
                <div class="p-5 w-100">
                  <b-row class="justify-content-center">
                    <b-col cols="12" lg="9" xl="6">
                      <img width="150px" src="@/assets/images/Cinionic_fullcolor_logo.png" />
                      <h2 class="font-weight-bold mt-4">Set new password</h2>

                      <form autocomplete="off" @submit.prevent="submit" method="post">
                        <!--div class="form-group">
                          <label for="email">E-mail</label>
                          <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                        </div-->
                        <div class="form-group">
                          <label for="email">Password</label>
                          <input type="password" id="password" class="form-control" placeholder="" v-model="password" required>
                        </div>
                        <div class="form-group">
                          <label for="email">Confirm Password</label>
                          <input type="password" id="password_confirmation" class="form-control" placeholder="" v-model="password_confirmation" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                      </form>

                      <div
                          class="d-flex align-items-center justify-content-center mt-4"
                      >
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import reset_password from "../../reset_password";
export default {
  name: "ResetPasswordForm",
  data() {
    return {
      token: null,
      email: null,
      password: null,
      password_confirmation: null,
      has_error: false
    }
  },
  computed: {},
  methods: {
    startLoading() {
      this.token = this.$route.params.token;
      this.email = this.$route.params.email;
    },
    async submit() {
      await reset_password(this.email,this.token,this.password,this.password_confirmation)
    },
  },
  mounted() {
    this.startLoading();
  },
};
</script>
