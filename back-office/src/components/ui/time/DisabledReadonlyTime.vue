<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Disabled and readonly states -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Disabled and readonly states"
    subtitle="Setting the disabled prop will remove all interactivity of the <b-time> component."
    modalid="modal-4"
    modaltitle="Disabled and readonly states"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;b-form-group
      label=&quot;Select time interactive state&quot;
      v-slot=&quot;{ ariaDescribedby }&quot;
    &gt;
      &lt;b-form-radio-group
        v-model=&quot;state&quot;
        :aria-describedby=&quot;ariaDescribedby&quot;
        aria-controls=&quot;ex-disabled-readonly&quot;
      &gt;
        &lt;b-form-radio value=&quot;disabled&quot;&gt;Disabled&lt;/b-form-radio&gt;
        &lt;b-form-radio value=&quot;readonly&quot;&gt;Readonly&lt;/b-form-radio&gt;
        &lt;b-form-radio value=&quot;normal&quot;&gt;Normal&lt;/b-form-radio&gt;
      &lt;/b-form-radio-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-time
      id=&quot;ex-disabled-readonly&quot;
      :disabled=&quot;disabled&quot;
      :readonly=&quot;readonly&quot;
    &gt;&lt;/b-time&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        state: 'disabled'
      }
    },
    computed: {
      disabled() {
        return this.state === 'disabled'
      },
      readonly() {
        return this.state === 'readonly'
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div>
        <b-form-group
          label="Select time interactive state"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            v-model="state"
            :aria-describedby="ariaDescribedby"
            aria-controls="ex-disabled-readonly"
          >
            <b-form-radio value="disabled">Disabled</b-form-radio>
            <b-form-radio value="readonly">Readonly</b-form-radio>
            <b-form-radio value="normal">Normal</b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <b-time
          id="ex-disabled-readonly"
          :disabled="disabled"
          :readonly="readonly"
        ></b-time>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "DisabledReadonlyTime",

  data: () => ({
    state: "disabled",
  }),
  components: { BaseCard },
  computed: {
    disabled() {
      return this.state === "disabled";
    },
    readonly() {
      return this.state === "readonly";
    },
  },
};
</script>