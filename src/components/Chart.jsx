import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MapMarkers } from '../context/MapMarkerContext';
import reduceData from '../utils/reduce';

const Chart = () => {
	const {mapMarkers} = React.useContext(MapMarkers);
	const crashData = reduceData(mapMarkers.markers);
  const [data] = React.useState({
    datasets: [{data: crashData, backgroundColor: ["#ff6384", "#ffce56"]}],
    labels: ["Low", "Moderate To High"]
	});

  return (
    <div>
      <Doughnut data={data} height={1000} />
    </div>
  );
};

export default Chart;
