import React from "react";
import Chart from "react-apexcharts";


const CustomerReview = () => {
  const data = {
    series: [
      {
        name: "Reseña",
        data: [10, 50, 30, 90, 40, 120, 100],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      fill: {
        colors: ["#12284c"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#12284c"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-03-19T00:00:00.000Z",
          "2022-03-19T01:30:00.000Z",
          "2022-03-19T02:30:00.000Z",
          "2022-03-19T03:30:00.000Z",
          "2022-03-19T04:30:00.000Z",
          "2022-03-19T05:30:00.000Z",
          "2022-03-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false
      },
      toolbar:{
        show: false
      }
    },
  };
  return <div className="CustomerReview">
        <Chart options={data.options} series={data.series} type="area" />
  </div>;
};

export default CustomerReview;
