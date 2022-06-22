import React from 'react';
import ShuffleArray from './ShuffleArray.js'
import './Array.css'

function VisualizeArray (len) {

    console.log(len)

    return (
        <div className='container'>
            <ShuffleArray len={len['len']}/>
        </div>
    )
}

export default VisualizeArray;