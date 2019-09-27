import React from 'react'
import Chart from '../Chart'
import { MapMarkers } from '../../context/MapMarkerContext'
import './RightPanel.scss'

function RightPanel() {
	const {mapMarkers} = React.useContext(MapMarkers)
	return(
		<div className="right-panel">
			<h1>Top 100 US Accident Cities From 2015 - 2017</h1>
			{mapMarkers.isLoading === false &&<Chart style={{display: "block"}}/>}
		</div>
	)
}

export default RightPanel;