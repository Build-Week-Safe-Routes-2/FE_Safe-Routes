import React from 'react'
import './RightPanel.scss'

function RightPanel() {
	return(
		<div className="right-panel">
			<h1>Top 100 US Accident Cities From 2015 - 2017</h1>
			<iframe title="graph" style={{height: '600px'}} src="https://saferoute-visual.herokuapp.com">
  			<p>Your browser does not support iframes.</p>
			</iframe>	
		</div>
	)
}

export default RightPanel;