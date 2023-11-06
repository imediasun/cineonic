<script>
export default {
  revenueChart: {
    series: [
      {
        name: "Net Profit",
        data: [20, 55, 44, 30, 61, 48, 20],
      },
    ],

    chartOptions: {
      colors: ["#fff"],
      plotOptions: {
        bar: {
          horizontal: false,
          endingShape: "flat",
          columnWidth: "40%",
        },
      },
      chart: {
        width:'150px', 
        fontFamily: '"Nunito Sans",sans-serif',
        foreColor: "#a1aab2",
        toolbar: {
          show: false,
        },
        sparkline: { enabled: true },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      grid: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: true,
        theme: "dark",
      },
    },
  },
};
</script>