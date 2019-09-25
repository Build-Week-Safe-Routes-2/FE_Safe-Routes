import React from 'react'
import MapNav from '../MapNav/MapNav';
import './LeftPanel.scss'

function LeftPanel({ changeCenter }) {
	const [slideIn, setSlideIn] = React.useState(false)
	const clickHandler = () => {
		setSlideIn(!slideIn)
	}
	return(
		<div className="left-panel">
			<MapNav changeCenter={changeCenter}/>
			<div>
				<button onClick={clickHandler}>Click Me</button>
			</div>
			 {slideIn && <TestMenu slideIn={slideIn} clickHandler={clickHandler}/>}
		</div>
	)
}

export default LeftPanel;

export const TestMenu = (props) => {

	let slideIn = props.slideIn ? 'slideIn': ""

	const style ={
		animation: "moveElement 3s normal forwards ease-in-out"
	}
	return (
		<div className={`testMenu ${slideIn}`} style={style}>
			<button>Button 1</button>
			<button>Button 2</button>
			<button>Button 3</button>
			<button>Button 4</button>
			<button>Button 5</button>
			<button onClick={props.clickHandler}>X</button>
		</div>
	)
}