import React from 'react';
import './Information.css';



export function bubbleSortAnimations (array) {
    const animations = [];

    for(var i = 0; i < array.length; i++){
    
        // Last i elements are already in place 
        for(var j = 0; j < ( array.length - i -1 ); j++){
           animations.push([j, j+1])
           animations.push([j, j+1])
          // Checking if the item at present iteration
          // is greater than the next iteration
          if(array[j] > array[j+1]){
            // If the condition is true then swap them
            animations.push([j, array[j + 1]])
            animations.push([j + 1, array[j]])
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp

          }
          else {
            animations.push([j, array[j]])
            animations.push([j + 1, array[j + 1]])
          }
        }
      }
    return animations
}

export default function BubbleSortInformation () {
    return (
        <div className='info'>
            <h2>Bubble Sort</h2>
            <div className='complexity'>
                <p>Time Complexity: <strong>O(n<sup>2</sup>)</strong></p>
                <p>Space Complexity: <strong>O(1)</strong></p>
            </div>
            <div className='explanation'>
                <p>
                    Bubble sort works by comparing two values, then swapping them if they are in the incorrect order. After the first pass through the array, the highest value is in the last index, therefore for the next pass, the last index does not need to be checked. After each pass, the algorithm stops at one index earlier until the entire array is sorted. 
                </p>
            </div>
        </div>
    )
}