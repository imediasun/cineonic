<script>
export default {
  salesChart: {
    series: [76],

    chartOptions: {
      colors: ["#4fc3f7"],
      chart: {
        type: "radialBar",
        offsetY: -20,
        fontFamily: '"Nunito Sans",sans-serif',
        foreColor: "#a1aab2",
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
            strokeWidth: "97%",
            margin: 5, // margin is in pixels
            shadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: "#a1aab2",
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: -2,
              fontSize: "22px",
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 0.4,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ["Average Results"],
      tooltip: {
        theme: "dark",
      },
    },
  },
};
</script>