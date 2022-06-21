import React, { useState, useEffect } from 'react';
import './header.css'
import Slider from './Slider';


function Header () {
    return (
        <div className='header'>
            This is the header
            <Slider />
        </div>
    )
};

export default Header;