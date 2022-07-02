export function insertionSortAnimations(array) 
{   

    let animations = [];
    let i, key, j; 

    for (i = 1; i < array.length; i++)
    { 
        //Key is first value in array
        key = array[i]; 
        j = i - 1; 


        let comp = j;

        animations.push(['Comparing', comp , i]);
        animations.push(['Done-Comparing', comp, i])
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && array[j] > key)
        {
            animations.push(['Comparing', j + 1, j])
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

export default function InsertionSortInformation () {
    return (
        <div className='info'>
            <h2>Insertion Sort</h2>
            <div className='complexity'>
                <p>Time Complexity: <strong>O(n<sup>2</sup>)</strong></p>
                <p>Space Complexity: <strong>O(1)</strong></p>
            </div>
            <div className='explanation'>
                <p>
                    Bubble sort works by comparing two values, then swapping them if they are in the incorrect order. After the first pass through the array, the highest value is in the last index, therefore for the next pass, the last index does not need to be checked. After each pass, the algorithm stops at one index earlier until the entire array is sorted. 
                </p>
            </div>
        </div>
    )
}