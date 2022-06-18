import React from 'react';
import './Array.css'

function ArrayFactor (arr) {

    let output = arr.map(item => <div className='item' style={{'height':`${item}fr`}}> Hello </div>)
    
    return (
        <div className='array'>{output}</div>
    )
}
