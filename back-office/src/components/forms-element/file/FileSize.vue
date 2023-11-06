
    <!-- --------------------------
    component view
    ---------------------------- -->
    <template>

      <div class="mb-3 pl-2 w-100" >
        <b-row>
          <b-col>
            <input style="display: inline;" @change="upload($event)"
                   type="file"
                   name="picture"
                   id="new-file"
                   class="custom-file-input"
                   aria-label="picture"
                   multiple
            >
            <label style="display: inline" class="custom-file-label" for="new-file">
              <span>Upload your CSV file here</span>
              <span class="btn-primary"></span>
            </label>
          </b-col>
          <b-col>
            <b-button variant="primary" style="width: 20%;" @click="submit"  >Submit</b-button>
          </b-col>
        </b-row>

        <div>
        </div>
      </div>



    </template>


<script>
import MyFormData from "../../../MyFormData";

export default {
  name: "FileSize",

  data() {
    return {
      form: new MyFormData({contract_id: 5, files: []}),
      toastCount: 0
    }
  },
  methods: {
    upload(event) {
      for (let file of event.target.files) {
        try {
          let reader = new FileReader();
          reader.readAsDataURL(file); // Not sure if this will work in this context.
          this.form.files.push(file);
        } catch {
          console.log( "error"
          )
        }
      }
    },
    submit(){
      this.form.post('/Companies-import')
          .catch(errors => {
            throw errors;
          })
          .then((response) =>
      this.makeToast(true,response)
       );
    },
    makeToast(append = false,response) {
      this.toastCount++
      this.$bvToast.toast(`Page will be reloaded in 5 seconds `, {
        title: 'CSV File was uploaded successfuly',
        autoHideDelay: 5000,
        appendToast: append
      })
      setTimeout(function(){ location = response.data.redirect; }, 5000);

    }
  },
  components: { },
};
</script>