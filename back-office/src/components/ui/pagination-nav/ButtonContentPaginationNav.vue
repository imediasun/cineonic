<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button content -->
  <!-- ----------------------------------------------------------------------------- -->

  <BaseCard
    title="Button content"
    subtitle="For a full list of all available slots see the Slots section below."
    modalid="modal-4"
    modaltitle="Button content"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;div class=&quot;overflow-auto&quot;&gt;
    &lt;!-- Use text in props --&gt;
    &lt;b-pagination-nav
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
      first-text=&quot;First&quot;
      prev-text=&quot;Prev&quot;
      next-text=&quot;Next&quot;
      last-text=&quot;Last&quot;
    &gt;&lt;/b-pagination-nav&gt;

    &lt;!-- Use emojis in props --&gt;
    &lt;b-pagination-nav
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
      first-text=&quot;⏮&quot;
      prev-text=&quot;⏪&quot;
      next-text=&quot;⏩&quot;
      last-text=&quot;⏭&quot;
      class=&quot;mt-4&quot;
    &gt;&lt;/b-pagination-nav&gt;

    &lt;!-- Use HTML and sub-components in slots --&gt;
    &lt;b-pagination-nav
      number-of-pages=&quot;10&quot;
      base-url=&quot;#&quot;
      class=&quot;mt-4&quot;
    &gt;
      &lt;template #first-text&gt;&lt;span class=&quot;text-success&quot;&gt;First&lt;/span&gt;&lt;/template&gt;
      &lt;template #prev-text&gt;&lt;span class=&quot;text-danger&quot;&gt;Prev&lt;/span&gt;&lt;/template&gt;
      &lt;template #next-text&gt;&lt;span class=&quot;text-warning&quot;&gt;Next&lt;/span&gt;&lt;/template&gt;
      &lt;template #last-text&gt;&lt;span class=&quot;text-info&quot;&gt;Last&lt;/span&gt;&lt;/template&gt;
      &lt;template #ellipsis-text&gt;
        &lt;b-spinner small type=&quot;grow&quot;&gt;&lt;/b-spinner&gt;
        &lt;b-spinner small type=&quot;grow&quot;&gt;&lt;/b-spinner&gt;
        &lt;b-spinner small type=&quot;grow&quot;&gt;&lt;/b-spinner&gt;
      &lt;/template&gt;
      &lt;template #page=&quot;{ page, active }&quot;&gt;
        &lt;b v-if=&quot;active&quot;&gt;{{ page }}&lt;/b&gt;
        &lt;i v-else&gt;{{ page }}&lt;/i&gt;
      &lt;/template&gt;
    &lt;/b-pagination-nav&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
      </pre>
    </template>
    <!-- --------------------------
    code view
    ---------------------------- -->

    <template v-slot:comcode>
      <div class="overflow-auto">
        <!-- Use text in props -->
        <b-pagination-nav
          number-of-pages="10"
          base-url="#"
          first-text="First"
          prev-text="Prev"
          next-text="Next"
          last-text="Last"
        ></b-pagination-nav>

        <!-- Use emojis in props -->
        <b-pagination-nav
          number-of-pages="10"
          base-url="#"
          first-text="⏮"
          prev-text="⏪"
          next-text="⏩"
          last-text="⏭"
          class="mt-4"
        ></b-pagination-nav>

        <!-- Use HTML and sub-components in slots -->
        <b-pagination-nav number-of-pages="10" base-url="#" class="mt-4">
          <template #first-text
            ><span class="text-success">First</span></template
          >
          <template #prev-text><span class="text-danger">Prev</span></template>
          <template #next-text><span class="text-warning">Next</span></template>
          <template #last-text><span class="text-info">Last</span></template>
          <template #ellipsis-text>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
            <b-spinner small type="grow"></b-spinner>
          </template>
          <template #page="{ page, active }">
            <b v-if="active">{{ page }}</b>
            <span v-else>{{ page }}</span>
          </template>
        </b-pagination-nav>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";
export default {
  name: "ButtonContentPaginationNav",

  data: () => ({
    page: "",
  }),
  components: { BaseCard },
};
</script>