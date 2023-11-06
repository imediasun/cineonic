<template>
  <div >
    <BModal v-model="showDeleteDialog" title="Confirm Delete" @ok="confirmDelete" @cancel="showDeleteDialog = false" default-cancel ok-title="Yes">
      <p>Are you sure you want to delete this entry from the database?</p>
    </BModal>
    <div>

      <b-row>

        <b-col class="d-flex align-items-stretch">
          <FileSize />
        </b-col>

      </b-row>
      <b-button  @click="$bvModal.show('create')" variant="primary">Create New</b-button>
      <b-modal
          id="create"
          ref="create-modal"
          title="Create New Company"
          header-bg-variant="light"
          hide-footer
          hide-header
          size="md"
      >
        <form @submit.prevent="" autocomplete="off" :key="map">

          <!--        <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch  w-100">-->
          <!--          <AddGoogleMap :lat="new_Company.lat" :lng="new_Company.lng" @update="new_Company = { ...new_Company, ...$event }" />-->
          <!--        </b-col>-->

          <label>Legal name</label>
          <b-form-input v-model="new_Company.legal_name" placeholder="Cinionic NV"></b-form-input>

          <label>Country</label>
          <b-form-select v-model="new_Company.country" :options="countries" placeholder="USA"></b-form-select>

          <label>Marketing Name</label>
          <b-form-input v-model="new_Company.marketing_name" placeholder="Cinionic"></b-form-input>

          <label>Address</label>
          <Autocomplete :country="getCode(new_Company.country)" :value="new_Company.address" @update="setAddress($event, 'new_Company')" placeholder="11080 White Rock Road, Suite 100" />

          <label>City</label>
          <b-form-input v-model="new_Company.city" placeholder="Rancho Cordova, Sacramento"></b-form-input>

          <label>Zip Code</label>
          <b-form-input v-model="new_Company.zip" placeholder="95670"></b-form-input>

          <label>State</label>
          <b-form-input v-model="new_Company.state" placeholder="US-CA"></b-form-input>

          <label>Office region</label>
          <b-form-input v-model="new_Company.office_region" placeholder="North America"></b-form-input>


          <label>Office sub region</label>
          <b-form-input v-model="new_Company.office_sub_region" placeholder="United States"></b-form-input>

          <label>Phone</label>
          <b-form-input v-model="new_Company.phone" placeholder="+1 866 469 80 36"></b-form-input>

          <label>Website</label>
          <b-form-input v-model="new_Company.website" placeholder="https://www.cinionic.com"></b-form-input>

          <label>Email</label>
          <b-form-input v-model="new_Company.email" placeholder="info@cinionic.com"></b-form-input>


          <AddGoogleMap :key="map"  :lat="new_Company.lat" :lng="new_Company.lng" @update="new_Company = { ...new_Company, ...$event }" />


          <label>Lat</label>
          <b-form-input disabled v-model="new_Company.lat" placeholder="45.555"></b-form-input>

          <label>Lng</label>
          <b-form-input disabled v-model="new_Company.lng" placeholder="45.555"></b-form-input>

          <label>Related Countries</label>
          <div>
            <b-form-select v-model="new_Company.related_countries" :options="options" multiple :select-size="4"></b-form-select>
            <div class="mt-3">Selected: <strong>{{ Company.related_countries }}</strong></div>
          </div>
          <div  v-for="error in create_errors" :key="error" class="w-100">
            <label class="mt-4 text-danger" >{{error}}</label> <br>
          </div>

          <b-button
              block
              variant="primary"
              class="mt-3"
              @click="create_Company()"
          >Create</b-button>
        </form>
      </b-modal>
    </div>
    <div >
      <b-card no-body class="mb-4 mt-4 ">
        <b-card-body class="p-3">
          <h5 class="card-title mb-0">Basic Table</h5>
        </b-card-body>
        <b-table responsive class="mb-0" head-variant="light" :items="Companies">
          <template #cell(lat)="data">
            <template v-if="data.item.lat">
              {{data.item.lat}}
            </template>
            <!--b-spinner v-else variant="primary" label="Lat" /-->
          </template>
          <template #cell(lng)="data">
            <template v-if="data.item.lng">
              {{data.item.lng}}
            </template>
            <!--b-spinner v-else variant="primary" label="Lng" /-->
          </template>
          <template #cell(updated_at)="data"> {{formatDate(data.item.updated_at) }} </template>
          <template #cell(created_at)="data"> {{formatDate(data.item.created_at) }} </template>
          <template #cell(edit)="data"> <span @click="handleUpdate(data.item)" class="text-primary cursor-pointer -underline">Edit</span>  </template>
          <template #cell(delete)="props">
            <span @click="showDeleteConfirmation(props.item.id)" class="text-danger cursor-pointer -underline">Delete</span>
          </template>
        </b-table>
      </b-card>

    </div>
    <b-modal
        id="update"
        ref="update-modal"
        title="Update New Company"
        header-bg-variant="light"
        hide-footer
        hide-header
        size="md"
    >



      <label>Legal name</label>
      <b-form-input v-model="Company.legal_name" placeholder="Cinionic NV"></b-form-input>

      <label class="w-100 d-flex justify-content-between mb-0"><span>Country</span> <u @click="Company.country = ''" class="text-danger -underline cursor-pointer">clear</u></label>
      <b-form-select v-model="Company.country" :options="countries" placeholder="USA"></b-form-select>


      <label>Marketing Name</label>

      <b-form-input v-model="Company.marketing_name" placeholder="Cinionic"></b-form-input>

      <label>Address</label>
      <Autocomplete :country="getCode(Company.country)" :value="Company.address" @update="setAddress($event, 'Company')" placeholder="11080 White Rock Road, Suite 100" />

      <label>City</label>
      <b-form-input v-model="Company.city" placeholder="Rancho Cordova, Sacramento"></b-form-input>

      <label>Zip Code</label>
      <b-form-input v-model="Company.zip" placeholder="95670"></b-form-input>

      <label>State</label>
      <b-form-input v-model="Company.state" placeholder="US-CA"></b-form-input>

      <label>Office region</label>
      <b-form-input v-model="Company.office_region" placeholder="North America"></b-form-input>


      <label>Office sub region</label>
      <b-form-input v-model="Company.office_sub_region" placeholder="United States"></b-form-input>

      <label>Phone</label>
      <b-form-input v-model="Company.phone" placeholder="+1 866 469 80 36"></b-form-input>

      <label>Website</label>
      <b-form-input v-model="Company.website" placeholder="https://www.cinionic.com"></b-form-input>

      <label>Email</label>
      <b-form-input v-model="Company.email" placeholder="info@cinionic.com"></b-form-input>

      <!--      <b-col cols="12" md="6" xl="4" class="d-flex align-items-stretch w-100">-->
      <AddGoogleMap :key="map" :lat="Company.lat" :lng="Company.lng" @update="Company = { ...Company, ...$event }" />
      <!--      </b-col>-->

      <label>Lat</label>
      <b-form-input disabled v-model="Company.lat" placeholder="45.555"></b-form-input>

      <label>Lng</label>
      <b-form-input disabled v-model="Company.lng" placeholder="45.555"></b-form-input>
      <label>Related Countries</label>
      <div>
        <b-form-select v-model="Company.related_countries" :options="options" multiple :select-size="4"></b-form-select>
        <div class="mt-3">Selected: <strong>{{ Company.related_countries }}</strong></div>
      </div>

      <div  v-for="error in update_errors" :key="error" class="w-100">
        <label class="mt-4 text-danger" >{{error}}</label> <br>
      </div>

      <b-button
          block
          variant="primary"
          class="mt-3"
          @click="update_Company()"
      >Update</b-button>
    </b-modal>
  </div>
</template>

<script>
import axios from "../../axios"
import countries from "../../countries"
import Autocomplete from "../../components/google/Autocomplete.vue";
//import Echo from "laravel-echo";
//import IO from "socket.io-client";
export default {

  data() {
    return {
      map: 0,
      showDeleteDialog: false,
      CompanyToDelete: null,
      Company: {
        lat: '',
        lng: ''
      },
      countries: countries,
      options: [
        {  text: 'Afghanistan', value: 'AF' },
         { text: 'Åland Islands',value: 'AX'},
         { text: 'Albania',value: 'AL'},
         { text: 'Algeria',value: 'DZ'},
         { text: 'American Samoa',value: 'AS'},
         { text: 'Andorra',value: 'AD'},
         { text: 'Angola',value: 'AO'},
         { text: 'Anguilla',value: 'AI'},
         { text: 'Antarctica',value: 'AQ'},
         { text: 'Antigua and Barbuda',value: 'AG'},
         { text: 'Argentina',value: 'AR'},
         { text: 'Armenia',value: 'AM'},
         { text: 'Aruba',value: 'AW'},
         { text: 'Australia',value: 'AU'},
         { text: 'Austria',value: 'AT'},
         { text: 'Azerbaijan',value: 'AZ'},
         { text: 'Bahamas',value: 'BS'},
         { text: 'Bahrain',value: 'BH'},
         { text: 'Bangladesh',value: 'BD'},
         { text: 'Barbados',value: 'BB'},
         { text: 'Belarus',value: 'BY'},
         { text: 'Belgium',value: 'BE'},
         { text: 'Belize',value: 'BZ'},
         { text: 'Benin',value: 'BJ'},
         { text: 'Bermuda',value: 'BM'},
         { text: 'Bhutan',value: 'BT'},
         { text: 'Bolivia, Plurinational State of',value: 'BO'},
         { text: 'Bonaire, Sint Eustatius and Saba',value: 'BQ'},
         { text: 'Bosnia and Herzegovina',value: 'BA'},
         { text: 'Botswana',value: 'BW'},
         { text: 'Bouvet Island',value: 'BV'},
         { text: 'Brazil',value: 'BR'},
         { text: 'British Indian Ocean Territory',value: 'IO'},
         { text: 'Brunei Darussalam',value: 'BN'},
         { text: 'Bulgaria',value: 'BG'},
         { text: 'Burkina Faso',value: 'BF'},
         { text: 'Burundi',value: 'BI'},
         { text: 'Cambodia',value: 'KH'},
         { text: 'Cameroon',value: 'CM'},
         { text: 'Canada',value:'CA'},
         { text: 'Cape Verde',value:'CV'},
         { text: 'Cayman Islands',value:'KY'},
         { text: 'Central African Republic',value:'CF'},
         { text: 'Chad',value:'TD'},
         { text: 'Chile',value:'CL'},
         { text: 'China',value:'CN'},
         { text: 'Christmas Island',value:'CX'},
         { text: 'Cocos (Keeling) Islands',value:'CC'},
         { text: 'Colombia',value:'CO'},
         { text: 'Comoros',value:'KM'},
         { text: 'Congo',value:'CG'},
         { text: 'Congo, the Democratic Republic of the',value:'CD'},
         { text: 'Cook Islands',value:'CK'},
         { text: 'Costa Rica',value:'CR'},
         { text: 'Côte dIvoire',value:'CI'},
         { text: 'Croatia',value:'HR'},
         { text: 'Cuba',value:'CU'},
         { text: 'Curaçao',value:'CW'},
         { text: 'Cyprus',value:'CY'},
         { text: 'Czech Republic',value:'CZ'},
         { text: 'Denmark',value:'DK'},
         { text: 'Djibouti',value:'DJ'},
         { text: 'Dominica',value:'DM'},
         { text: 'Dominican Republic',value:'DO'},
         { text: 'Ecuador',value:'EC'},
        {  text: 'Egypt',value:'EG'},
        {  text: 'El Salvador', value:'SV'},
        {  text: 'Equatorial Guinea',value:'GQ'},
        {  text: 'Eritrea',value:'ER'},
        {  text: 'Estonia',value:'EE'},
         { text: 'Ethiopia',value:'ET'},
         { text: 'Falkland Islands (Malvinas)',value:'FK'},
         { text: 'Faroe Islands',value:'FO'},
         { text: 'Fiji',value:'FJ'},
         { text: 'Finland',value:'FI'},
         { text: 'France',value:'FR'},
         { text: 'French Guiana',value:'GF'},
         { text: 'French Polynesia',value:'PF'},
         { text: 'French Southern Territories',value:'TF'},
         { text: 'Gabon',value:'GA'},
         { text: 'Gambia',value:'GM'},
         { text: 'Georgia',value:'GE'},
         { text: 'Germany',value:'DE'},
         { text: 'Ghana',value:'GH'},
         { text: 'Gibraltar',value:'GI'},
         { text: 'Greece',value:'GR'},
         { text: 'Greenland',value:'GL'},
         { text: 'Grenada',value:'GD'},
          {text: 'Guadeloupe',value:'GP'},
         { text: 'Guam',value:'GU'},
         { text: 'Guatemala',value:'GT'},
         { text: 'Guernsey',value:'GG'},
         { text: 'Guinea',value:'GN'},
         { text: 'Guinea-Bissau',value:'GW'},
         { text: 'Guyana',value:'GY'},
         { text: 'Haiti',value:'HT'},
        {  text: 'Heard Island and McDonald Islands',value:'HM'},
         { text: 'Holy See (Vatican City State)',value:'VA'},
  { text: 'Honduras',value:'HN'},
   { text: 'Hong Kong',value:'HK'},
   { text: 'Hungary',value:'HU'},
    {text: 'Iceland',value:'IS'},
    {text: 'India',value:'IN'},
   { text: 'Indonesia',value:'ID'},
   { text: '"Iran, Islamic Republic of',value:'IR'},
   { text: 'Iraq',value:'IQ'},
   { text: 'Ireland',value:'IE'},
   { text: 'Isle of Man',value:'IM'},
   { text: 'Israel',value:'IL'},
   { text: 'Italy',value:'IT'},
   { text: 'Jamaica',value:'JM'},
   { text: 'Japan',value:'JP'},
   { text: 'Jersey',value:'JE'},
   { text: 'Jordan',value:'JO'},
   { text: 'Kazakhstan',value:'KZ'},
   { text: 'Kenya',value:'KE'},
   { text: 'Kiribati',value:'KI'},
   { text: 'Korea, Democratic Peoples Republic of',value:'KP'},
   { text: 'Korea, Republic of',value:'KR'},
   { text: 'Kuwait',value:'KW'},
   { text: 'Kyrgyzstan',value:'KG'},
   { text: 'Lao Peoples Democratic Republic',value:'LA'},
   { text: 'Latvia',value:'LV'},
   { text: 'Lebanon',value:'LB'},
   { text: 'Lesotho',value:'LS'},
   { text: 'Liberia',value:'LR'},
   { text: 'Libya',value:'LY'},
   { text: 'Liechtenstein',value:'LI'},
   { text: 'Lithuania',value:'LT'},
   { text: 'Luxembourg',value:'LU'},
   { text: 'Macao',value:'MO'},
   { text: 'Macedonia, the Former Yugoslav Republic of',value:'MK'},
   { text: 'Madagascar',value:'MG'},
   { text: 'Malawi',value:'MW'},
   { text: 'Malaysia',value:'MY'},
   { text: 'Maldives',value:'MV'},
   { text: 'Mali',value:'ML'},
   { text: 'Malta',value:'MT'},
   { text: 'Marshall Islands',value:'MH'},
   { text: 'Martinique',value:'MQ'},
   { text: 'Mauritania',value:'MR'},
   { text: 'Mauritius',value:'MU'},
   { text: 'Mayotte',value:'YT'},
   { text: 'Mexico',value:'MX'},
   { text: 'Micronesia, Federated States of',value:'FM'},
   { text: 'Moldova, Republic of',value:'MD'},
   { text: 'Monaco',value:'MC'},
   { text: 'Mongolia',value:'MN'},
   { text: 'Montenegro',value:'ME'},
   { text: 'Montserrat',value:'MS'},
   { text: 'Morocco',value:'MA'},
   { text: 'Mozambique',value:'MZ'},
   { text: 'Myanmar',value:'MM'},
   { text: 'Namibia',value:'NA'},
   { text: 'Nauru',value:'NR'},
   { text: 'Nepal',value:'NP'},
   { text: 'Netherlands',value:'NL'},
   { text: 'New Caledonia',value:'NC'},
   { text: 'New Zealand',value:'NZ'},
   { text: 'Nicaragua',value:'NI'},
   { text: 'Niger',value:'NE'},
   { text: 'Nigeria',value:'NG'},
   { text: 'Niue',value:'NU'},
   { text: 'Norfolk Island',value:'NF'},
   { text: 'Northern Mariana Islands',value:'MP'},
   { text: 'Norway',value:'NO'},
   { text: 'Oman',value:'OM'},
   { text: 'Pakistan',value:'PK'},
   { text: 'Palau',value:'PW'},
   { text: 'Palestine, State of',value:'PS'},
   { text: 'Panama',value:'PA'},
   { text: 'Papua New Guinea',value:'PG'},
   { text: 'Paraguay',value:'PY'},
   { text: 'Peru',value:'PE'},
   { text: 'Philippines',value:'PH'},
   { text: 'Pitcairn',value:'PN'},
   { text: 'Poland',value:'PL'},
   { text: 'Portugal',value:'PT'},
   { text: 'Puerto Rico',value:'PR'},
   { text: 'Qatar',value:'QA'},
   { text: 'Réunion',value:'RE'},
   { text: 'Romania',value:'RO'},
   { text: 'Russian Federation',value:'RU'},
   { text: 'Rwanda',value:'RW'},
   { text: 'Saint Barthélemy',value:'BL'},
   { text: 'Saint Helena, Ascension and Tristan da Cunha',value:'SH'},
   { text: 'Saint Kitts and Nevis',value:'KN'},
   { text: 'Saint Lucia',value:'LC'},
   { text: 'Saint Martin (French part)',value:'MF'},
   { text: 'Saint Pierre and Miquelon',value:'PM'},
   { text: 'Saint Vincent and the Grenadines',value:'VC'},
   { text: 'Samoa',value:'WS'},
   { text: 'San Marino',value:'SM'},
   { text: 'Sao Tome and Principe',value:'ST'},
   { text: 'Saudi Arabia',value:'SA'},
   { text: 'Senegal',value:'SN'},
   { text: 'Serbia',value:'RS'},
   { text: 'Seychelles',value:'SC'},
   { text: 'Sierra Leone',value:'SL'},
   { text: 'Singapore',value:'SG'},
   { text: 'Sint Maarten (Dutch part)',value:'SX'},
   { text: 'Slovakia',value:'SK'},
   { text: 'Slovenia',value:'SI'},
   { text: 'Solomon Islands',value:'SB'},
   { text: 'Somalia',value:'SO'},
   { text: 'South Africa',value:'ZA'},
   { text: 'South Georgia and the South Sandwich Islands',value:'GS'},
   { text: 'South Sudan',value:'SS'},
   { text: 'Spain',value:'ES'},
   { text: 'Sri Lanka',value:'LK'},
   { text: 'Sudan',value:'SD'},
   { text: 'Suriname',value:'SR'},
   { text: 'Svalbard and Jan Mayen',value:'SJ'},
   { text: 'Swaziland',value:'SZ'},
   { text: 'Sweden',value:'SE'},
   { text: 'Switzerland',value:'CH'},
   { text: 'Syrian Arab Republic',value:'SY'},
   { text: 'Taiwan, Province of China',value:'TW'},
   { text: 'Tajikistan',value:'TJ'},
    {text: 'Tanzania, United Republic of',value:'TZ'},
   { text: 'Thailand',value:'TH'},
   { text: 'Timor-Leste',value:'TL'},
   { text: 'Togo',value:'TG'},
   { text: 'Tokelau',value:'TK'},
   { text: 'Tonga',value:'TO'},
   { text: 'Trinidad and Tobago',value:'TT'},
   { text: 'Tunisia',value:'TN'},
   { text: 'Turkey',value:'TR'},
   { text: 'Turkmenistan',value:'TM'},
   { text: 'Turks and Caicos Islands',value:'TC'},
   { text: 'Tuvalu',value:'TV'},
   { text: 'Uganda',value:'UG'},
   { text: 'Ukraine',value:'UA'},
   { text: 'United Arab Emirates',value:'AE'},
   { text: 'United Kingdom',value:'GB'},
   { text: 'United States',value:'US'},
   { text: 'United States Minor Outlying Islands',value:'UM'},
   { text: 'Uruguay',value:'UY'},
   { text: 'Uzbekistan',value:'UZ'},
   { text: 'Vanuatu',value:'VU'},
   { text: 'Venezuela, Bolivarian Republic of',value:'VE'},
   { text: 'Viet Nam',value:'VN'},
   { text: 'Virgin Islands, British',value:'VG'},
   { text: 'Virgin Islands, U.S.',value:'VI'},
   { text: 'Wallis and Futuna',value:'WF'},
   { text: 'Western Sahara',value:'EH'},
   { text: 'Yemen',value:'YE'},
   { text: 'Zambia',value:'ZM'},
   { text: 'Zimbabwe',value:'ZW' }

      ],
      new_Company: {
        legal_name: '',
        country: '',
        marketing_name: '',
        address: '',
        city: '',
        zip: '',
        office_region: '',
        office_sub_region: '',
        state: '',
        phone: '',
        website: '',
        email: '',
        lat: null,
        lng: null,
        related_countries: [],
        country_code:'',

      },
      create_errors: [],
      update_errors: [],
      Companies: [],
/*      echo: new Echo({
        broadcaster: 'socket.io',
        host: 'ws://127.0.0.1:6001/',//laravel-echo-b53b12a145f6.deltablue.io
        enabledTransports: ['ws', 'wss'],
        transports: ['websocket', 'polling', 'flashsocket'],
        client: IO,
        onConnect: () => {console.log('connected1', this.echo.socketId())}
      })*/
    }
  },
  components: {
    AddGoogleMap: () => import("@/components/google/AddGoogleMap"),
    FileSize: () => import("@/components/forms-element/file/FileSize"),
    Autocomplete
  },
  async mounted() {
    await this.loadCompanies()
/*    this.echo.connector.socket.on('connect', () => {
      console.log('Connected')
    })*/

   /* console.log(this.echo)*/
/*    this.echo.channel('Companies')
        .listen('.Companies', (_data) => {
          const data = _data.data
          this.Companies.find(d => d.id == data.id).lat = data.lat
          this.Companies.find(d => d.id == data.id).lng = data.lng
        })*/


/*    this.echo.connector.socket.on('disconnect', () => {
      console.log('Disconnect')
    })*/

  },
  methods: {
    getCode(code) {
      return countries.find(e => e.value === code)?.code
    },
    setAddress(address, variable) {
      this[variable].zip = address.address_components.find((item) => item.types.includes("postal_code"))?.long_name
      this[variable].city = address.address_components.find((item) => item.types.includes("postal_town"))?.long_name
      console.log(address)
      console.log(address.address_components.types)
      this[variable].state = address.address_components.find((item) => item.types.includes("administrative_area_level_1"))?.long_name
      this[variable].country_code = address.address_components.find((item) => item.types.includes("country"))?.short_name,
      this[variable].country = address.address_components.find((item) => item.types.includes("country"))?.long_name
      this[variable].address = address.name
      this[variable].lat = address.geometry.location.lat
      this[variable].lng = address.geometry.location.lng
      this.map++
    },
    loadCompanies() {
      axios.get('/Companies')
          .then(response => {
            this.Companies = response.data
          })
          .catch(error => {
            console.log(error)
          })
    },
    formatDate(date) {
      return new Date(date).toISOString().slice(0, 10).replaceAll('-', '/')
    },
    handleUpdate(data){
      this.Company = data
      this.$refs['update-modal'].show()
    },
    async create_Company() {
      this.create_errors = []
      await axios.post('/Companies', this.new_Company)
          .then(response => {
            if (response.data.success === false) {
              for (const [key, value] of Object.entries(response.data.data)) {
                console.log(key)
                this.create_errors.push(value[0])
              }
              return false
            }
            this.$refs['create-modal'].hide()
            this.new_Company = {
              legal_name: '',
              country: '',
              marketing_name: '',
              address: '',
              city: '',
              zip: '',
              office_region: '',
              office_sub_region: '',
              state: '',
              phone: '',
              website: '',
              email: '',
              lat: null,
              lng: null,
              related_countries: [],
              country_code:'',
            }
            return true
          })
          .catch(error => {
            console.log(error)
          }).finally(async () => {
            await this.loadCompanies()
          })
    },
    async update_Company() {
      this.update_errors = []
      await axios.patch(`/Companies/${this.Company.id}`, this.Company)
          .then(response => {
            if (response.data.success === false) {
              for (const [key, value] of Object.entries(response.data.data)) {
                console.log(key)
                this.update_errors.push(value[0])
              }
              return false
            }
            this.$refs['update-modal'].hide()
            this.Company = {}
            this.loadCompanies()
            return true
          })
          .catch(error => {
            console.log(error)

          }).finally(async () => {
            await this.loadCompanies()
          })
    },
    async showDeleteConfirmation(id) {
      this.CompanyToDelete = id;
      this.showDeleteDialog = true;
    },
    async confirmDelete() {
      await axios.delete(`/Companies/${this.CompanyToDelete}`)
          .then(() => {
            this.loadCompanies();
          })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)

          }).finally(() => {
            this.showDeleteDialog = false;
          });
    }
  }
}
</script>

<style scoped>
label {
  margin-bottom: -10px;
  margin-top: 10px;
}


</style>