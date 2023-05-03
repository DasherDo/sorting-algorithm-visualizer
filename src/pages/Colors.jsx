import React from 'react';
import './colors.css';

function Colors() {
	const CANVAS_WIDTH = 200;
	const CANVAS_HEIGHT = 200;

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

	// Gets context object and pixel array of current canvas
	const getCanvas = () => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		let imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		// Separates out every pixel from Image Data object
		// pixels is a 2d arrays, where every index is an Uint8ClampedArray
		let pixels = [];
		for (let i = 0; i < imageData.data.length; i += 4) {
			const cur = [imageData.data.slice(i, i + 4)];
			pixels.push(cur);
		}
		let iData = [];
		for (let i = 0; i < pixels.length; i++) {
			let cur = [];
			for (let j = 0; j < pixels[i][0].length; j++) {
				cur.push(pixels[i][0][j]);
			}
			iData.push(cur);
		}
		return { ctx: ctx, pixelArray: iData };
	};

	const saveCanvas = (ctx, pixelArray) => {
		let iData = [];
		for (let i = 0; i < pixelArray.length; i++) {
			for (let j = 0; j < pixelArray[i].length; j++) {
				iData.push(pixelArray[i][j]);
			}
		}

		// Creates new image data with same dimensions as original rectangle
		let imgData = ctx.createImageData(CANVAS_WIDTH, CANVAS_HEIGHT);
		// Copies over every new pixel
		for (let i = 0; i < imgData.data.length; i += 4) {
			imgData.data[i + 0] = iData[i];
			imgData.data[i + 1] = iData[i + 1];
			imgData.data[i + 2] = iData[i + 2];
			imgData.data[i + 3] = iData[i + 3];
		}
		// Replaces image with reversed one
		ctx.putImageData(imgData, 0, 0);
	};

	const draw = () => {
		let c = document.getElementById('canv');
		let ctx = c.getContext('2d');
		c.width = CANVAS_WIDTH;
		c.height = CANVAS_HEIGHT;

		ctx.scale(1, 1);

		let grd = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		grd.addColorStop(0, 'blue');
		grd.addColorStop(1, 'red');

		ctx.fillStyle = grd;
		ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	};

	// Redundant function
	// const getData = () => {
	// 	// Gets canvas element
	// 	let c = document.getElementById('canv');
	// 	let ctx = c.getContext('2d');
	// 	let imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	// 	// Separates out every pixel from Image Data object
	// 	// pixels is a 2d arrays, where every index is an Uint8ClampedArray
	// 	let pixels = [];
	// 	for (let i = 0; i < imageData.data.length; i += 4) {
	// 		const cur = [imageData.data.slice(i, i + 4)];
	// 		pixels.push(cur);
	// 	}
	// 	// Reverses the pixels
	// 	rev(pixels);
	// };

	const rev = () => {
		// Gets context and current pixel array from getCanvas function
		const { ctx, pixelArray } = getCanvas();

		// Shuffles pixels
		let pixels = shuffleArray(pixelArray);
		saveCanvas(ctx, pixels);
	};

	const swap = (arr, x, y) => {
		let tmp = arr[x];
		arr[x] = arr[y];
		arr[y] = tmp;
	};

	const sum = (arr) => {
		return arr.reduce((x, y) => {
			return x + y;
		});
	};

	const sort = () => {
		const { ctx, pixelArray } = getCanvas();
		const len = pixelArray.length;
		for (let i = 0; i < len - 1; i++) {
			for (let j = 0; j < len - i - 1; j++) {
				if (sum(pixelArray[j]) > sum(pixelArray[j + 1])) {
					let tmp = pixelArray[j];
					pixelArray[j] = pixelArray[j + 1];
					pixelArray[j] = tmp;
				}
				// Case where sums are equal but rgb values are not
				// else if (sum(pixelArray[j]) === sum(pixelArray[j + 1])) {
				// 	if (pixelArray[j][0] > pixelArray[j + 1][0]) {
				// 		swap(pixelArray, j, j + 1);
				// 	} else if (pixelArray[j][1] > pixelArray[j + 1][1]) {
				// 		swap(pixelArray, j, j + 1);
				// 	} else if (pixelArray[j][2] > pixelArray[j + 1][2]) {
				// 		swap(pixelArray, j, j + 1);
				// 	}
				// }
			}
		}
		saveCanvas(ctx, pixelArray);
	};

	return (
		<div className='color'>
			<button onClick={draw}>Draw</button>
			<button onClick={rev}>Shuffle</button>
			<button onClick={sort}>Sort</button>
			<canvas id='canv'></canvas>
		</div>
	);
}

export default Colors;
