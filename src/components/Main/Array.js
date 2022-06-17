import React from 'react';
import './Array.css'

function ArrayHeight (array) {

    let output = array.map(item => <div className='item' style={{'height':`${item}fr`}}> {item} </div>)

    
    return (
        <div className='array'>{output}</div>
    )
}

export default ArrayHeight;