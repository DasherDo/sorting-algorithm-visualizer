import React, { useState } from 'react';
import './Array.css'
import MergeSortInformation , { getMergeSortAnimations } from './SortingAlgorithms/MergeSort'
import BubbleSortInformation, { bubbleSortAnimations } from './SortingAlgorithms/BubbleSort';
import InsertionSortInformation, { insertionSortAnimations } from './SortingAlgorithms/InsertionSort';
import Personal from './Personal';
import QuickSortInformation, { getQuickSortAnimations } from './SortingAlgorithms/QuickSort';
import HeapSortInformation, { getHeapSortAnimations } from './SortingAlgorithms/HeapSort';

function VisualizeArray ({ len }) {

    const ANIMATION_SPEED = 1;

    const [selectedAlgo, setSelectedAlgo] = useState('')

    let arr = Array.from({length:len}, (_, i) => i + 1 );
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0

    for (let i = len - 1; i > 0; i--) //Change 10 to len after testing
    {
        
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
    
        // Swap arr[i] with the element
        // at random index
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    const bubbleSort = () => {
        setSelectedAlgo('BubbleSort')
        const animations = bubbleSortAnimations(arr);
        for (let i = 0; i < animations.length - 1; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 4 < 2
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'red' : 'aqua';
                setTimeout(()=> {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED)
            }
            else {
                const [barOneIdx, barOneHeight] = animations[i];
                const [barTwoIdx, barTwoHeight] = animations[i + 1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight * 2}px`;
                    barTwoStyle.height= `${barTwoHeight * 2}px`;
                }, i * ANIMATION_SPEED)
            }
        }
    };

    const heapSort = () => {
        setSelectedAlgo('HeapSort');
        const animations = getHeapSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === 'Comparing' || animations[i][0] === 'Done-Comparing';
            if (isColorChange) {
                const [operation, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = operation === 'Comparing' ? 'red' : 'aqua'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED)
            }
            else {
                const [barOneIdx, barOneHeight] = animations[i].slice(1);
                // const [operation2 , barTwoIdx, barTwoHeight] = animations[i + 1];
                const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight * 2}px`;
                    // barTwoStyle.height = `${barTwoHeight  * 2}px`;
                }, i * ANIMATION_SPEED)
            }
        }
    }

    const insertionSort = () => {
        setSelectedAlgo('InsertionSort')
        const animations = insertionSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === 'Comparing' || animations[i][0] === 'Done-Comparing';
            if (isColorChange) {
                const [operation, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = operation === 'Comparing' ? 'red' : 'aqua'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED)
            }
            else {
                const [barOneIdx, barOneHeight] = animations[i].slice(1);
                // const [operation2 , barTwoIdx, barTwoHeight] = animations[i + 1];
                const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight * 2}px`;
                    // barTwoStyle.height = `${barTwoHeight  * 2}px`;
                }, i * ANIMATION_SPEED)
            }
        }
    };

    const mergeSort = () => {
        setSelectedAlgo('MergeSort')
        const animations = getMergeSortAnimations(arr);
        for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? 'red' : 'aqua';
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight * 2}px`;
            }, i * ANIMATION_SPEED);
        }
        }
    };

    const quickSort = () => {
        setSelectedAlgo('QuickSort');
        const animations = getQuickSortAnimations(arr, 0, arr.length - 1);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = animations[i][0] === 'Comparing' || animations[i][0] === 'Done-Comparing';
            if (isColorChange) {
                const [operation, barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = operation === 'Comparing' ? 'red' : 'aqua'
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED)
            }
            else {
                const [barOneIdx, barOneHeight] = animations[i].slice(1);
                // const [operation2 , barTwoIdx, barTwoHeight] = animations[i + 1];
                const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight * 2}px`;
                    // barTwoStyle.height = `${barTwoHeight  * 2}px`;
                }, i * ANIMATION_SPEED)
            }
        }
    }

    return (
        <div className='container'>
            <div className='array'>

            {arr.map((value, idx) => <div className='array-bar' key={idx} style={{height:`${value * 2}px`}}></div>)}
            </div>
            <div className='buttons'>

                <button onClick={bubbleSort}>Bubble Sort</button>
                <button onClick={mergeSort}>Merge Sort</button>
                <button onClick={insertionSort}>Insertion Sort</button>
                <button onClick={quickSort}>Quick Sort</button>
                <button onClick={heapSort}>Heap Sort</button>
            </div>
            {(!selectedAlgo && <Personal />) || (selectedAlgo === 'BubbleSort' && <BubbleSortInformation />) || (selectedAlgo === 'MergeSort' && <MergeSortInformation />) || (selectedAlgo === 'InsertionSort' && <InsertionSortInformation />) || (selectedAlgo === 'QuickSort' && <QuickSortInformation />) || (selectedAlgo === 'HeapSort' && <HeapSortInformation />)}
        </div>
    )
}

export default VisualizeArray;