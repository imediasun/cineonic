<script>
export default {
  viewChart: {
    series: [
      {
        name: "Views",
        data: [28, 40, 36, 52, 38, 60, 55],
      },
    ],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0,
        },
      },
      colors: ["#fff"],
      chart: {
        fontFamily: '"Nunito Sans",sans-serif',
        foreColor: "#a1aab2",
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
        colors: ["#fff", "#4fc3f7"],
      },
      stroke: {
        curve: "straight",
        width: 1,
        colors: ["rgba(255,255,255,.2)"],
      },
      tooltip: {
        theme: "dark",
      },
    },
  },
};
</script>