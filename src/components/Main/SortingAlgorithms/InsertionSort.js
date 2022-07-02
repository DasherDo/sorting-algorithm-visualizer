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
                    Insertion Sort works by separating the array into a sorted and unsorted section. The first two elements are compared and placed into the correct position. Then the next element is placed into the correct position in the sorted section. Each new element from the unsorted region is moved to the correct position in the sorted region until the whole array has been transversed. 
                </p>
            </div>
        </div>
    )
}