export function insertionSortAnimations(array) 
{   

    let animations = [];
    let i, key, j; 
    //Order to keep track of operations once put into animations.`
    for (i = 1; i < array.length; i++)
    { 
        //Key is first value in array
        key = array[i]; 
        j = i - 1; 

        //Push comparing at beginning and end of loop to change color to red, then back to aqua
        let comp = j;
        //Order put as index 0 in every comparison, then incremented
        animations.push(['Comparing', comp , i]);
        animations.push(['Done-Comparing', comp, i])
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && array[j] > key)
        {
            animations.push(['Comparing', j + 1, j])
            //Order put as index 0 in every swap, then incremented
            animations.push(['Swapping', j + 1, array[j]]);
            animations.push(['Done-Comparing', j + 1, j])
            array[j + 1] = array[j]; 
            j = j - 1; 
        } 
        array[j + 1] = key; 
        animations.push(['Comparing', comp, i])
        animations.push(['Swapping', j + 1, key])
        animations.push(['Done-Comparing', comp , i])
    }
    return animations;
} 