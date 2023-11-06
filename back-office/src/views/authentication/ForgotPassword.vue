<template>
  <div id="forgot_password" style="min-height: calc(100vh - 20px)" tag="section">
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
                          Please fill your email address.
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
                      <h2 class="font-weight-bold mt-4">Reset password</h2>

                      <b-form @submit.prevent="submit">
                        <b-form-group>
                          <b-form-input
                              id="txt-email"
                              type="text"
                              placeholder="Enter Email address"
                              class="mb-3"
                              v-model="$v.form.email.$model"
                              :state="validateState('email')"
                          ></b-form-input>
                          <b-form-invalid-feedback id="txt-email"
                          >This is a required field</b-form-invalid-feedback
                          >
                        </b-form-group>
                        <b-button
                            type="submit"
                            variant="primary"
                            :disabled="$v.form.$invalid"
                            size="lg"
                            block
                            class="mt-4"
                            style="background: rgb(2,0,36);
              background: linear-gradient(222deg, rgba(2,0,36,1) 0%, rgba(7,6,15,1) 35%, rgba(54,111,122,1) 100%);"
                        >Reset Password</b-button
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
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";
import forgot_password from "../../forgot_password";
export default {
  name: "ForgotPassword",
  mixins: [validationMixin],
  data: () => ({
    form: {
      email: ""
    },
    checkbox: false,
  }),
  computed: {},
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4),
      },
    },
  },
  methods: {
    validateState(email) {
      const { $dirty, $error } = this.$v.form[email];
      return $dirty ? !$error : null;
    },
    async submit() {
      await forgot_password(this.form.email)
    },
  },
};
</script>
