import VisualizeArray from '../components/Main/VisualizeArray';
import React, { useState } from 'react';
import Header from '../components/Header/Header';

function Array() {
	const [arrayLength, setArrayLength] = useState(25);
	const [speed, setSpeed] = useState(10);

	const handleLengthChange = (length) => {
		setArrayLength(length);
	};

	const handleSpeedChange = (speed) => {
		setSpeed(speed);
	};

	return (
		<div className='App'>
			<Header
				handleLengthChange={handleLengthChange}
				handleSpeedChange={handleSpeedChange}
			/>
			<VisualizeArray len={arrayLength} speed={speed} />
		</div>
	);
}

export default Array;
