<template>
  <div :class="['selectBox', show ? 'show' : '']">
    <b-form-input  ref="input" class="selectBox__value" :value="value" @input="handle($event)" @click="show = true" @blur="show = false" @focus="show = true" />
    <div class="dropdown-menu">
      <a v-for="(option, index) in options" @click="handleChange(option.place_id)" :key="index" class="dropdown-item">{{option.description}}</a>
    </div>
  </div>
</template>

<script>
import axios from "../../axios"
export default {
  name: "Autocomplete",
  props: {
    value: {
      type: String,
      default: ""
    },
    country: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      options: [],
      show: false,
      selectedIndex: -1,
      visible: false,
      autocomplete: null,
      input: null,
    };
  },
  mounted() {
    this.$refs.input.$el.setAttribute("autocomplete", "off")
  },
  methods: {
    updateValue(value) {
      this.$emit("update", value);
    },
    async handleChange(place_id) {
      const response = await axios(`google-addresses/${place_id}`)
      this.updateValue(response.data.result)
      this.show = false;
    },
    async handle(value) {
      console.log(value)
      if (value === "" || value === this.value) {
        return
      }
      const response = await axios(`google-addresses?input=${value}${this.country.length ? `&country=${String(this.country).toLowerCase()}` : ''}`)
      this.options = response.data.predictions
      this.show = true
    },
    onClickHandler(e) {
      this.updateValue(e.target.innerText);
      this.visible = false;
    },
      limitText (count) {
        return `and ${count} other countries`
      },
      clearAll () {
        this.selectedCountries = []
      }
    }
}
</script>

<style scoped lang="scss">
body {
  background-color: #ecf0f1;
  padding: 50px;
}

.selectBox {
  border: 1px solid #ccc;
  position: relative;
  cursor: pointer;
  &__value {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .dropdown-menu {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    display: block;
    top: 100%;
    width: 100%;
    max-height: 250px;
    z-index: -1;
    overflow-y: auto;
    transform: translateY(-15%);
    visibility: hidden;
  }

  &.show {
    background-color: #fff;
    .dropdown-menu {
      transition: all 0.3s ease-in-out;
      visibility: visible;
      opacity: 1;
      z-index: 1;
      transform: translateY(0);
    }
  }
}

</style>