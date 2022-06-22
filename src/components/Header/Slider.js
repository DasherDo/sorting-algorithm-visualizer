import React, { useState, useEffect } from 'react';
import './header.css'
import VisualizeArray from '../Main/VisualizeArray'

function Slider () {

    const [value, setValue] = useState(25);

    return (
        <div className='slider'>
            <input type="range" min="1" max="50" value={value}
         onChange={({ target: { value: radius } }) => {
                    setValue(radius);
                  }}
      />
            {value}
            <VisualizeArray len={value}/>
        </div>
    )
};

export default Slider;