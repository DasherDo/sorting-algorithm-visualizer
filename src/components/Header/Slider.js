import React, { useState } from 'react';
import './header.css'
// import VisualizeArray from '../Main/VisualizeArray'

function Slider ({handleChange}) {

    const [value, setValue] = useState(5);

    return (
            <div className='slider'>
                <input type="range" min="1" max="50" value={value}
                    onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                    handleChange(radius);
                    }}
        />
            </div>
    )
};

export default Slider;