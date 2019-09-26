import React from 'react';

const HistoryMenu = (props) => {
	
	// Used to assing a className to the div below
	let fadeIn = props.fadeIn ? 'fadeIn': "";

	return (
		<div className={`history-menu ${fadeIn}`}>
			<div className="history-menu__list-container">
				<ul className="history-menu__list">
					{props.searchHistory.map( item => {
							return <li className="history-menu__item">{item.address}</li>
						})
					}
				</ul>
			</div>
			<button onClick={props.clickHandler}>X</button>
		</div>
	)
}
export default HistoryMenu;