import React from 'react';
import ShuffleArray from './ShuffleArray.js'
import './Array.css'
import BubbleSort from './SortingAlgorithms/BubbleSort'

function VisualizeArray (len) {

    return (
        <div className='container'>
            <ShuffleArray len={len['len']}/>
        </div>
    )
}

export default VisualizeArray;