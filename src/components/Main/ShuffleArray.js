import React from 'react';
import Array from './Array.js'

function ShuffleArray (len) {
 
    let arr = Array.from({length: 10}, () => (Math.floor(Math.random() * 100))%10);
        // Start from the last element and swap
        // one by one. We don't need to run for
        // the first element that's why i > 0
    for (let i = len - 1; i > 0; i--)
    {
        
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
    
        // Swap arr[i] with the element
        // at random index
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    console.log(arr)
    
    return (
        <div>
            <Array array={arr} />
        </div>
    )
}

export default ShuffleArray