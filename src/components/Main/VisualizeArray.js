import React from 'react';
import ShuffleArray from './ShuffleArray.js'
import './Array.css'

function VisualizeArray () {

    return (
        <div className='container'>
            <ShuffleArray len={50}/>
        </div>
    )
}

export default VisualizeArray;