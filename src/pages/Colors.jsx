import React from 'react';
import './colors.css';

function Colors() {
	const shuffleArray = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			// Pick a random index from 0 to i inclusive
			let j = Math.floor(Math.random() * (i + 1));

			// Swap arr[i] with the element
			// at random index
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};
	const draw = () => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');

		let grd = ctx.createLinearGradient(0, 0, 255, 255);
		grd.addColorStop(0, 'blue');
		grd.addColorStop(1, 'red');

		ctx.fillStyle = grd;
		ctx.fillRect(20, 20, 150, 100);
	};

	const getData = () => {
		// Gets canvas element
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		let imageData = ctx.getImageData(20, 20, 150, 100);

		// Separates out every pixel from Image Data object
		// pixels is a 2d arrays, where every index is an Uint8ClampedArray
		let pixels = [];
		for (let i = 0; i < imageData.data.length; i += 4) {
			const cur = [imageData.data.slice(i, i + 4)];
			pixels.push(cur);
		}
		// Reverses the pixels
		rev(pixels);
	};

	const rev = (pixels) => {
		// Gets canvas element
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		pixels = pixels.reverse();
		pixels = shuffleArray(pixels);

		// Loops through pixels and adds them to iData.
		// Puts data into non Uint8ClampedArray
		let iData = [];
		for (let i = 0; i < pixels.length; i++) {
			for (let j = 0; j < pixels[i][0].length; j++) {
				iData.push(pixels[i][0][j]);
			}
		}

		// Creates new image data with same dimensions as original rectangle
		let imgData = ctx.createImageData(150, 100);
		// Copies over every new pixel
		for (let i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 0] = iData[i];
			imgData.data[i + 1] = iData[i + 1];
			imgData.data[i + 2] = iData[i + 2];
			imgData.data[i + 3] = iData[i + 3];
		}
		// Replaces image with reversed one
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
