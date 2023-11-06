<template>
  <div id="login" style="min-height: calc(100vh - 20px)" tag="section">
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
                          Elevate your cinema experience with the power of laser
                        </h2>
                        <p class="mt-4 text-white op-5 font-weight-normal">
                          Welcome to the official Company dashboard.
                        </p>
                        <b-button @click="goToWebsite"
                          size="lg"
                          variant="info"
                          class="mt-4 text-capitalize"
                          >Go back to website</b-button
                        >
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
                      <h2 class="font-weight-bold mt-4">Sign in</h2>

                      <b-form @submit.prevent="submit">
                        <b-form-group>
                          <b-form-input
                            id="txt-username"
                            type="text"
                            placeholder="Enter Username"
                            class="mb-3"
                            v-model="$v.form.username.$model"
                            :state="validateState('username')"
                          ></b-form-input>
                          <b-form-invalid-feedback id="txt-username"
                            >This is a required field</b-form-invalid-feedback
                          >
                        </b-form-group>
                        <b-form-group>
                          <b-form-input
                            id="txt-pwd"
                            type="password"
                            placeholder="Enter Password"
                            class="mb-3"
                            v-model="$v.form.pwd.$model"
                            :state="validateState('pwd')"
                          ></b-form-input>
                          <b-form-invalid-feedback id="txt-pwd"
                            >This is a required field</b-form-invalid-feedback
                          >
                        </b-form-group>

                        <div class="d-flex align-items-center">

                          <div class="ml-auto">
                            <a href="forgotpassword" class="link"
                              >Forgot password?</a
                            >
                          </div>
                        </div>
                        <b-button
                          type="submit"
                          variant="primary"
                          :disabled="$v.form.$invalid"
                          size="lg"
                          block
                          class="mt-4"
                          style="background: rgb(2,0,36);
              background: linear-gradient(222deg, rgba(2,0,36,1) 0%, rgba(7,6,15,1) 35%, rgba(54,111,122,1) 100%);"
                          >Sign In</b-button
                        >
                      </b-form>
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
import login from "../../login";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  name: "FullLogin",
  mixins: [validationMixin],
  data: () => ({
    form: {
      username: "",
      pwd: "",
    },
    checkbox: false,
  }),
  computed: {},
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
      },
      pwd: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    goToWebsite() {
      window.location.href = "https://www.cinionic.com";
    },
    validateState(username) {
      const { $dirty, $error } = this.$v.form[username];
      return $dirty ? !$error : null;
    },
    async submit() {
      await login(this.form.username, this.form.pwd)
    },
  },
};
</script>
