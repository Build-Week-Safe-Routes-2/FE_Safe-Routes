import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = () => {
  const dummyData = {
    datasets: [
      {
        data: [2, 3, 4],
        // 30 returns into the doughnut as 'undefined' with no color
        backgroundColor: ["#ff6384", "#ffce56", "#36a2eb"]
      }
    ],
    labels: ["Red", "Yellow", "Blue"]
  };

  // Data is organized and labelled/colored by ~index~
  // brb
  const [data, setData] = React.useState(dummyData);

  return (
    //
    <>
      <h1>Chart</h1>
      <Doughnut data={data} height={50} />
    </>
  );
};

export default Chart;
