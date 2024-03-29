<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Select Tags -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Select Tags"
    subtitle="The following is an example of using a custom select component for choosing from a pre-defined set of tags"
    modalid="modal-10"
    modaltitle="Select Tags"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">

        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-form-group
        label="Tagged input using select"
        label-for="tags-component-select"
      >
        <!-- Prop `add-on-change` is needed to enable adding tags vie the `change` event -->
        <b-form-tags
          id="tags-component-select"
          v-model="value"
          size="lg"
          class="mb-2"
          add-on-change
          no-outer-focus
        >
          <template
            v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }"
          >
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                  @remove="removeTag(tag)"
                  :title="tag"
                  :disabled="disabled"
                  variant="info"
                  >{{ tag }}</b-form-tag
                >
              </li>
            </ul>
            <b-form-select
              v-bind="inputAttrs"
              v-on="inputHandlers"
              :disabled="disabled || availableOptions.length === 0"
              :options="availableOptions"
            >
              <template #first>
                <!-- This is required to prevent bugs with Safari -->
                <option disabled value="">Choose a tag...</option>
              </template>
            </b-form-select>
          </template>
        </b-form-tags>
      </b-form-group>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "SelectTags",

  data: () => ({
    options: [
      "Apple",
      "Orange",
      "Banana",
      "Lime",
      "Peach",
      "Chocolate",
      "Strawberry",
    ],
    value: [],
  }),
  components: { BaseCard },
  computed: {
    availableOptions() {
      return this.options.filter((opt) => this.value.indexOf(opt) === -1);
    },
  },
};
</script>