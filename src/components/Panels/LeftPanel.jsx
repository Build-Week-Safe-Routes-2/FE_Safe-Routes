import React from 'react'
import MapNav from '../MapNav/MapNav';
import HistoryMenu from './HistoryMenu';
import SearchDateModal from './SearchDateModal';
import './LeftPanel.scss'

function LeftPanel({ changeCenter }) {
	// State the is used for the short circut in the app
	const [fadeIn, setSlideIn] = React.useState(false)
	const [searchHistory, setSearchHistory] = React.useState([])
	// State used for the modal
	const [modal, setModal] = React.useState(false)

	// Toggle modal state
	const toggleModal = () => {
		setModal(!modal)
	}

	// Update searchHistory array
	const updateHistory = str => {
		setSearchHistory([...searchHistory, str])
	}

	// Checking which button was clicked, and setting state
	const clickHandler = (e) => {
		switch(e.target.textContent){
			case "Search History":
				if(searchHistory.length > 0){
					setSlideIn(!fadeIn)
					}
				break
			case 'X': 
				setSlideIn(!fadeIn)
				break
			case "Search Date":
				toggleModal()
				break
			default: 
				return null
		}
			
	}

	return(
		<div className="left-panel">

			<MapNav changeCenter={changeCenter} updateHistory={updateHistory}/>

			<div className="left-panel__menu">
				<button onClick={clickHandler}>Search History</button>
				<button onClick={clickHandler}>Search Date</button>
			</div>
			 {/* Short circut used for rending history menu to the UI */}
			 {fadeIn && <HistoryMenu fadeIn={fadeIn} clickHandler={clickHandler} searchHistory={searchHistory}/>}
			 {/* Short circut for the modal */}
			 {modal && <SearchDateModal modal={modal} toggleModal={toggleModal}/>}
		</div>
	)
}

export default LeftPanel;