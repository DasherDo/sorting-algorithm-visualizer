import React, { useState, useEffect } from 'react';
import './header.css'
import Slider from './Slider';


function Header ({handleLengthChange}) {

    const [val, setVal] = useState(25)

    const handleChange = (value) => {
        setVal(value)
    }

    useEffect(()=> {
        handleLengthChange(val)
    })

    return (
        <div className='header'>
            <Slider handleChange={handleChange}/>
            {val}
        </div>
    )
};

export default Header;