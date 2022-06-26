import React, { useState } from 'react';
import './header.css'
// import VisualizeArray from '../Main/VisualizeArray'

function Slider ({handleChange}) {

    const [value, setValue] = useState(5);

<<<<<<< HEAD
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
=======
    return (
            <div className='slider'>
                <input type="range" min="1" max="50" value={value}
                    onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                    handleChange(radius);
                    }}
        />
            </div>
>>>>>>> 741cd77553bb23d8c131cd2f3a16f3c2ed7ff7a0
    )
};

export default Slider;