import React, { useState, useEffect } from 'react';
import './header.css'

function Slider () {
    return (
        <div className='slider'>
            <input type='range' min='1' max='100' value='50'></input>
        </div>
    )
};

export default Slider;