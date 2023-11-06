<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Backgrounds -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Backgrounds"
    subtitle="Use background variants to change the appearance of individual progress bars. The default variant is primary."
    modalid="modal-4"
    modaltitle="Backgrounds"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div&gt;
    &lt;div v-for=&quot;bar in bars&quot; class=&quot;row mb-1&quot;&gt;
      &lt;div class=&quot;col-sm-2&quot;&gt;{{ bar.variant }}:&lt;/div&gt;
      &lt;div class=&quot;col-sm-10 pt-1&quot;&gt;
        &lt;b-progress :value=&quot;bar.value&quot; :variant=&quot;bar.variant&quot; :key=&quot;bar.variant&quot;&gt;&lt;/b-progress&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        bars: [
          { variant: 'success', value: 75 },
          { variant: 'info', value: 75 },
          { variant: 'warning', value: 75 },
          { variant: 'danger', value: 75 },
          { variant: 'primary', value: 75 },
          { variant: 'secondary', value: 75 },
          { variant: 'dark', value: 75 }
        ],
        timer: null
      }
    },
    mounted() {
      this.timer = setInterval(() =&gt; {
        this.bars.forEach(bar =&gt; (bar.value = 25 + Math.random() * 75))
      }, 2000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
      this.timer = null
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
      <div v-for="bar in bars" :key="bar.variants" class="row mb-1">
        <div class="col-sm-3 font-weight-bold">{{ bar.variants }}:</div>
        <div class="col-sm-9 pt-1">
          <b-progress
            :value="bar.value"
            :variant="bar.variants"
            :key="bar.variant"
          ></b-progress>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "ProgressBackground",

  data: () => ({
    bar: [],
    bars: [
      { variants: "success", value: 75 },
      { variants: "info", value: 75 },
      { variants: "warning", value: 75 },
      { variants: "danger", value: 75 },
      { variants: "primary", value: 75 },
      { variants: "secondary", value: 75 },
      { variants: "dark", value: 75 },
    ],
    timer: null,
  }),
  components: { BaseCard },
  mounted() {
    this.timer = setInterval(() => {
      this.bars.forEach((bar) => (bar.value = 25 + Math.random() * 75));
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
};
</script>