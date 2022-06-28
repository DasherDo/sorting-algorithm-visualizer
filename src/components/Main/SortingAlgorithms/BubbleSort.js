export function BubbleSortAnimations (array, len) {

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < (len - 1 - i); j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            };
            
        };
    };

    console.log(array)

    return array;
};