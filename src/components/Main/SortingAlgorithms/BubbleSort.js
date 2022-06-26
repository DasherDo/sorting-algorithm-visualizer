import React from 'react';

function BubbleSort ({arr}) {

    const orderOfArrays = []

    let array = [5,4,3,2,1];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - 1 - i); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            };
            
        };
        orderOfArrays.push(array);
    };

    console.log(orderOfArrays)

    return (
        <div>
        </div>
    );
};

export default BubbleSort