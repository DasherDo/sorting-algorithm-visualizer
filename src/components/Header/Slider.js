import React, { useState, useEffect } from 'react';
import './header.css'

function Slider () {

    const [val, setVal] = useState(25);

    useEffect(()=> {
        setVal(val)
    },[val]);

    return (
        <div className='slider'>
            <input type='range' min='1' max='50'></input>
            {val}
        </div>
    )
};

export default Slider;