import React, { useEffect, useState } from 'react';
import './Array.css'
import { getMergeSortAnimations } from './SortingAlgorithms/MergeSort'
import { BubbleSortAnimations } from './SortingAlgorithms/BubbleSort'

function VisualizeArray ({ len }) {

    const [sorted, setSorted] = useState(false)
    const [sortedArray, setSortedArray] = useState([])

    const ANIMATION_SPEED = 100;

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

    useEffect(() => {
        setSorted(false)
    }, [len])

    const bubbleSort = () => {
        const animations = BubbleSortAnimations(arr);
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
                    barOneStyle.height = `${barOneHeight * 10}px`;
                    barTwoStyle.height= `${barTwoHeight * 10}px`;
                }, i * ANIMATION_SPEED)
            }
        }
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
            barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED);
        }
        }
    };

    return (
        <div className='array'>
            {/* <ShuffleArray len={len} getArray={getArray}/> */}
            {!sorted && arr.map((value, idx) => <div className='array-bar' key={idx} style={{height:`${value * 10}px`}}></div>)}
            {/* {sorted && sortedArray.map((value, idx) => <div className='array-bar' key={idx} style={{height:`${value * 10}px`}}></div>)}*/}
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={mergeSort}>Merge Sort</button>
            
            
        </div>
    )
}

export default VisualizeArray;