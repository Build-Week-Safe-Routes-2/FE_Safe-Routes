import React from "react";
import { Doughnut } from "react-chartjs-2";
import { MapMarkers } from '../context/MapMarkerContext';
import reduceData from '../utils/reduce';

const Chart = () => {
	const {mapMarkers} = React.useContext(MapMarkers);
	const crashData = reduceData(mapMarkers.markers);
  const [data] = React.useState({
    datasets: [{data: crashData, backgroundColor: ["#00E2DE", "#ff9181"]}],
    cutoutPercentage: 75,
    labels: ["Low", "Moderate"]
	});

  return (
    <div>
      <div className="doughnutContainer">
        <Doughnut  data={data} height={400} />
      </div>
        <div className="rightPanelTitleWrap">
           <h1>Title</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatibus.</p>
        </div>
        <div className="rightPanelMiddleWrap">
           <h1>Replacement of roller</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, voluptatibus.</p>
        </div>
        
    </div>
  );
};

export default Chart;
