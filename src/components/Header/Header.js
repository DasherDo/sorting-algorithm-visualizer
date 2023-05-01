import React, { useState, useEffect } from 'react';
import './header.css';
import Slider from './Slider';

function Header({ handleLengthChange, handleSpeedChange }) {
	const [val, setVal] = useState(50);
	const [speed, setSpeed] = useState(10);

	const handleChange = (value) => {
		setVal(value);
	};

	const handleSpeed = (speed) => {
		setSpeed(speed);
	};

	useEffect(() => {
		handleLengthChange(val);
	});

	useEffect(() => {
		handleSpeedChange(speed);
	});

	return (
		<div className='header'>
			Array Length: {val}
			<Slider handleChange={handleChange} handleSpeed={handleSpeed} />
			Animation Speed (in ms): {speed}
		</div>
	);
}

export default Header;
