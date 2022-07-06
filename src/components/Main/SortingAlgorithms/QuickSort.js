import React from 'react';

let animations = [];

export function getQuickSortAnimations(arr, low, high) {
	if (low < high) {

		// pi is partitioning index, arr[p]
		// is now at right place
		let pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		getQuickSortAnimations(arr, low, pi - 1);
		getQuickSortAnimations(arr, pi + 1, high);
	}
    console.log(animations)
    return animations;
}

// A utility function to swap two elements
function swap(arr, i, j) {
    animations.push(['Comparing', i, j])
    animations.push(['Swapping', i, arr[j]])
    animations.push(['Swapping', j, arr[i]])
    animations.push(['Done-Comparing', i, j])
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
function partition(arr, low, high) {

	// pivot
	let pivot = arr[high];

	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	let i = (low - 1);

	for (let j = low; j <= high - 1; j++) {

		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot) {

			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

export default function QuickSortInformation () {
    return (
        <div className='info'>
            <h2>Quick Sort</h2>
            <div className='complexity'>
                <p>Worst Case Time Complexity: <strong>O(n<sup>2</sup>)</strong></p>
                <p>Best Case Time Complexity: <strong>O(n * log(n))</strong></p>
                <p>Space Complexity: <strong>O(log(n))</strong></p>
            </div>
            <div className='explanation'>
                <p>
                    Quick Sort works by ...
                </p>
            </div>
        </div>
    )
}
