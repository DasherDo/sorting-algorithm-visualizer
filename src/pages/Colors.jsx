import React from 'react';
import './colors.css';

function Colors() {
	const draw = () => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');

		let grd = ctx.createLinearGradient(0, 0, 255, 0);
		grd.addColorStop(0, 'blue');
		grd.addColorStop(1, 'red');

		ctx.fillStyle = grd;
		ctx.fillRect(20, 20, 150, 100);
	};

	const getData = () => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		let imageData = ctx.getImageData(20, 20, 150, 100);

		let pixels = [];
		let test = imageData.data;
		for (let i = 0; i < imageData.data.length; i += 4) {
			const cur = [imageData.data.slice(i, i + 4)];
			pixels.push(cur);
		}
		console.log(test);
		rev(pixels);
	};

	const rev = (pixels) => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		pixels = pixels.reverse();
		let iData = [];
		for (let i = 0; i < pixels.length; i++) {
			for (let j = 0; j < pixels[i][0].length; j++) {
				iData.push(pixels[i][0][j]);
			}
		}
		console.log(iData);
		let imgData = ctx.createImageData(150, 100);
		for (let i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 0] = iData[i];
			imgData.data[i + 1] = iData[i + 1];
			imgData.data[i + 2] = iData[i + 2];
			imgData.data[i + 3] = iData[i + 3];
		}
		ctx.putImageData(imgData, 20, 20);
	};

	return (
		<div className='color'>
			<button onClick={draw}>Draw</button>
			<button onClick={getData}>Get Data</button>
			<button onClick={rev}>Reverse</button>
			<canvas id='canv'></canvas>
		</div>
	);
}

export default Colors;
