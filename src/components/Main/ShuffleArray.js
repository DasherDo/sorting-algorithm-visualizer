import React from 'react';

function ShuffleArray (len) {
 
    let arr = Array.from({length: 10}, (_, i) => i + 1 );
        // Start from the last element and swap
        // one by one. We don't need to run for
        // the first element that's why i > 0

    for (let i = 10 - 1; i > 0; i--) //Change 10 to len after testing
    {
        
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
    
        // Swap arr[i] with the element
        // at random index
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    
    let output = arr.map(item => <div className='item' style={{'height':`${item}fr`}}> {item} </div>)

    return (
        <div>
            {output}
        </div>
    )
}

export default ShuffleArray