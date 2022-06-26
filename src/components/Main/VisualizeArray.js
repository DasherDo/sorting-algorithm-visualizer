import React from 'react';
import './Array.css'

function VisualizeArray ({ len }) {

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

    return (
        <div className='array'>
            {/* <ShuffleArray len={len} getArray={getArray}/> */}
            {arr.map((value, idx) => <div className='item' key={idx} style={{height:`${value * 10}px`}}></div>)}
            
        </div>
    )
}

export default VisualizeArray;