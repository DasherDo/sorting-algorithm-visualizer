import React, { useEffect } from 'react';
import BubbleSort from './SortingAlgorithms/BubbleSort'

function ShuffleArray ({ len, getArray }) {

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

    useEffect(()=> {
        getArray(arr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [len])

    //Puts each array item into it's own div with height proportional to the number

    let output = arr.map(item => <div className='item' style={{height:`${item * 10}px`}}></div>);

    return (
        <div className='array'>
            {/* <BubbleSort array={arr}/> */}
            {output}
        </div>
    )
}

export default ShuffleArray