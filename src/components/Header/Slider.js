import React, { useState } from 'react';
import './header.css';
// import VisualizeArray from '../Main/VisualizeArray'

function Slider({ handleChange, handleSpeed }) {
	const [value, setValue] = useState(50);
	const [speed, setSpeed] = useState(10);

	return (
		<div className='slider'>
			<input
				type='range'
				min='50'
				max='175'
				value={value}
				onChange={({ target: { value: radius } }) => {
					setValue(radius);
					handleChange(radius);
				}}
			/>
			<input
				type='range'
				min='1'
				max='1000'
				value={speed}
				onChange={({ target: { value: radius } }) => {
					setSpeed(radius);
					handleSpeed(radius);
				}}
			/>
		</div>
	);
}

export default Slider;
