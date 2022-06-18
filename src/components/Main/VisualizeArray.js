import React from 'react';
import ShuffleArray from './ShuffleArray.js'
import './Array.css'

function VisualizeArray () {

    return (
        <div className='array'>
            <ShuffleArray len={15}/>
        </div>
    )
}

export default VisualizeArray;