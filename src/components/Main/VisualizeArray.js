import React from 'react';
import './Array.css'
import { getMergeSortAnimations } from './SortingAlgorithms/MergeSort'
import { bubbleSortAnimations } from './SortingAlgorithms/BubbleSort'
import { insertionSortAnimations } from './SortingAlgorithms/InsertionSort';

function VisualizeArray ({ len }) {

    const ANIMATION_SPEED = 10;

    //Creates array with numbers 1 to len
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

    const insertionSort = () => {
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
                const [operation , barOneIdx, barOneHeight] = animations[i];
                // const [operation2 , barTwoIdx, barTwoHeight] = animations[i + 1];
                const barOneStyle = arrayBars[barOneIdx].style;
                // const barTwoStyle = arrayBars[barTwoIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneHeight * 2}px`;
                    // barTwoStyle.height = `${barTwoHeight  * 2}px`;
                }, i * ANIMATION_SPEED)
            }
        }
        const arrayBars = document.getElementsByClassName('array-bars')
        arrayBars[-2].style.backgroundColor = 'aqua'
        arrayBars[-1].style.backgroundColor = 'aqua'
    };

    const mergeSort = () => {
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

    return (
        <div className='array'>
            {/* <ShuffleArray len={len} getArray={getArray}/> */}
            {arr.map((value, idx) => <div className='array-bar' key={idx} style={{height:`${value * 2}px`}}></div>)}
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={insertionSort}>Insertion Sort</button>
            
            
        </div>
    )
}

export default VisualizeArray;