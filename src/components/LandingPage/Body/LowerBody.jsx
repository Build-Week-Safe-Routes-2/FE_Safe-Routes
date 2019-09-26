import React from 'react';
import './LowerBody.scss';
import BlueWave from './img/BlueWave.svg';
import Computer from './img/Computer.svg';

const LowerBody = () => {
	return (
		<div>
			{/* <h1>This is the lower body</h1> */}
			<div>
				<div className="blueWaveWrap">
					<img src={BlueWave} alt="design" className="blueWave" />
					<div className="blueWaveCenter">
						<img src={Computer} alt="Man next to a computer with a map on it" className="computer" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LowerBody;
