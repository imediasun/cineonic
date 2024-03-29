<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Internationalization -->
  <!-- ----------------------------------------------------------------------------- -->
  <BaseCard
    title="Internationalization"
    subtitle="By default <b-form-timepicker> will use the browser's default locale, but you can specify the locale (or locales) to use via the locale prop."
    modalid="modal-8"
    modaltitle="Internationalization"
  >
    <!-- --------------------------
    code view
    ---------------------------- -->
    <template v-slot:highlight>
      <pre class="mb-0">
        <code class="javascript">
&lt;template&gt;
  &lt;b-row&gt;
    &lt;b-col cols=&quot;12&quot; class=&quot;mb-3&quot;&gt;
      &lt;label for=&quot;example-locales&quot;&gt;Locale:&lt;/label&gt;
      &lt;b-form-select id=&quot;example-locales&quot; v-model=&quot;locale&quot; :options=&quot;locales&quot;&gt;&lt;/b-form-select&gt;
    &lt;/b-col&gt;
    &lt;b-col md=&quot;6&quot;&gt;
      &lt;b-form-timepicker
        v-model=&quot;value&quot;
        v-bind=&quot;labels[locale] || {}&quot;
        :locale=&quot;locale&quot;
        show-seconds
        @context=&quot;onContext&quot;
      &gt;&lt;/b-form-timepicker&gt;
    &lt;/b-col&gt;
    &lt;b-col&gt;
      &lt;p&gt;Value: &lt;b&gt;'{{ value }}'&lt;/b&gt;&lt;/p&gt;
      &lt;p class=&quot;mb-0&quot;&gt;Context:&lt;/p&gt;
      &lt;pre class=&quot;small&quot;&gt;{{ context }}&lt;/pre&gt;
   &lt;/b-col&gt;
  &lt;/b-row&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '',
        context: null,
        locale: 'en-US',
        locales: [
          { value: 'en-US', text: 'English US (en-US)' },
          { value: 'de', text: 'German (de)' },
          { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },
          { value: 'zh', text: 'Chinese (zh)' }
        ],
        labels: {
          de: {
            labelHours: 'Stunden',
            labelMinutes: 'Minuten',
            labelSeconds: 'Sekunden',
            labelIncrement: 'Erh&ouml;hen',
            labelDecrement: 'Verringern',
            labelSelected: 'Ausgew&auml;hlte Zeit',
            labelNoTimeSelected: 'Keine Zeit ausgew&auml;hlt',
            labelCloseButton: 'Schlie&szlig;en'
          },
          'ar-EG': {
            labelHours: 'ساعات',
            labelMinutes: 'الدقائق',
            labelSeconds: 'ثواني',
            labelAmpm: 'صباحا مساء',
            labelAm: 'ص',
            labelPm: 'م',
            labelIncrement: 'زيادة',
            labelDecrement: 'إنقاص',
            labelSelected: 'الوقت المحدد',
            labelNoTimeSelected: 'لا وقت المختار',
            labelCloseButton: 'قريب'
          },
          zh: {
            labelHours: '小时',
            labelMinutes: '分钟',
            labelSeconds: '秒',
            labelAmpm: '上午下午',
            labelAm: '上午',
            labelPm: '下午',
            labelIncrement: '增量',
            labelDecrement: '减量',
            labelSelected: '选定时间',
            labelNoTimeSelected: '没有选择时间',
            labelCloseButton: '关'
          }
        }
      }
    },
    methods: {
      onContext(ctx) {
        this.context = ctx
      }
    }
  }
&lt;/script&gt;
        </code>
      </pre>
    </template>

    <!-- --------------------------
    component view
    ---------------------------- -->
    <template v-slot:comcode>
      <b-row>
        <b-col cols="12" class="mb-3">
          <label for="example-locales">Locale:</label>
          <b-form-select
            id="example-locales"
            v-model="locale"
            :options="locales"
          ></b-form-select>
        </b-col>
        <b-col md="6">
          <b-form-timepicker
            v-model="value"
            v-bind="labels[locale] || {}"
            :locale="locale"
            show-seconds
            @context="onContext"
          ></b-form-timepicker>
          <div class="mt-3">
            <p>
              Value: <b>'{{ value }}'</b>
            </p>
            <p class="mb-0">Context:</p>
            <pre class="small">{{ context }}</pre>
          </div>
        </b-col>
      </b-row>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from "../../card/BaseCard";

export default {
  name: "InternationalizationTimepicker",

  data: () => ({
    value: "",
    context: null,
    locale: "en-US",
    locales: [
      { value: "en-US", text: "English US (en-US)" },
      { value: "de", text: "German (de)" },
      { value: "ar-EG", text: "Arabic Egyptian (ar-EG)" },
      { value: "zh", text: "Chinese (zh)" },
    ],
    labels: {
      de: {
        labelHours: "Stunden",
        labelMinutes: "Minuten",
        labelSeconds: "Sekunden",
        labelIncrement: "Erhöhen",
        labelDecrement: "Verringern",
        labelSelected: "Ausgewählte Zeit",
        labelNoTimeSelected: "Keine Zeit ausgewählt",
        labelCloseButton: "Schließen",
      },
      "ar-EG": {
        labelHours: "ساعات",
        labelMinutes: "الدقائق",
        labelSeconds: "ثواني",
        labelAmpm: "صباحا مساء",
        labelAm: "ص",
        labelPm: "م",
        labelIncrement: "زيادة",
        labelDecrement: "إنقاص",
        labelSelected: "الوقت المحدد",
        labelNoTimeSelected: "لا وقت المختار",
        labelCloseButton: "قريب",
      },
      zh: {
        labelHours: "小时",
        labelMinutes: "分钟",
        labelSeconds: "秒",
        labelAmpm: "上午下午",
        labelAm: "上午",
        labelPm: "下午",
        labelIncrement: "增量",
        labelDecrement: "减量",
        labelSelected: "选定时间",
        labelNoTimeSelected: "没有选择时间",
        labelCloseButton: "关",
      },
    },
  }),
  components: { BaseCard },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
  },
};
</script>