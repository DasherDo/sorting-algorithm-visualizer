import React, { useState } from 'react';
import './header.css'
// import VisualizeArray from '../Main/VisualizeArray'

function Slider ({handleChange}) {

    const [value, setValue] = useState(50);

    return (
            <div className='slider'>
                <input type="range" min="50" max="350" value={value}
                    onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                    handleChange(radius);
                    }}
        />
            </div>
    )
};

export default Slider;