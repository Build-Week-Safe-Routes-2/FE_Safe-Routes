import React from 'react'
import MapNav from '../MapNav/MapNav';
import './LeftPanel.scss'

function LeftPanel({ changeCenter }) {
	// State the is used for the short circut in the app
	const [fadeIn, setSlideIn] = React.useState(false)
	const [searchHistory, setSearchHistory] = React.useState([])

	// Update searchHistory array
	const updateHistory = str => {
		setSearchHistory([...searchHistory, str])
	}

	// Changing state on clicks
	const clickHandler = () => {
		if(searchHistory.length > 0){
			setSlideIn(!fadeIn)
		}
			
	}

	return(
		<div className="left-panel">

			<MapNav changeCenter={changeCenter} updateHistory={updateHistory}/>

			<div className="lef-panel__menu">
				<button onClick={clickHandler}>Search History</button>
			</div>
			 {/* Short circut used for rending to the UI */}
			 { fadeIn && 
				 <DateMenu 
					 fadeIn={fadeIn} 
					 clickHandler={clickHandler} 
					 searchHistory={searchHistory}
					/>
				}
		</div>
	)
}

export default LeftPanel;

const DateMenu = (props) => {
	
	// Used to assing a className to the div below
	let fadeIn = props.fadeIn ? 'fadeIn': "";

	return (
		<div className={`testMenu ${fadeIn}`}>
			<div>
				<ul>
					{props.searchHistory.map( item => <li>{item.address}</li>)}
				</ul>
			</div>
			<button onClick={props.clickHandler}>X</button>
		</div>
	)
}