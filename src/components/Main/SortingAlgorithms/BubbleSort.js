import React from 'react';

function BubbleSort ({array}) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - 1 - i); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            };
        };
        break
    };

    let output = array.map(item => <div className='item' style={{height:`${item * 10}px`}}></div>)

    return (
        <div className='array'>
            {output}
        </div>
    )
};

export default BubbleSort