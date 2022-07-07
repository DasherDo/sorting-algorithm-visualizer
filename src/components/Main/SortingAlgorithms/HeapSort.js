import React from 'react';

export function getHeapSortAnimations( arr)
  {
    let animations = [];
    var n = arr.length;

    // Build heap (rearrange array)
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
      heapify(arr, n, i);

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
      // Move current root to end
      animations.push(['Comparing', 0, i]);
      animations.push(['Swapping', 0, arr[i]]);
      animations.push(['Swapping', i, arr[0]]);
      animations.push(['Done-Comparing', 0, i]);
      var temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      // call max heapify on the reduced heap
      heapify(arr, i, 0);
    }
    return animations;
  }

  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  function heapify(arr, n, i)
  {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
      largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
      largest = r;

    // If largest is not root
    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  }

export default function HeapSortInformation () {
    return (
        <div className='info'>
            <h2>Heap Sort</h2>
            <div className='complexity'>
                <p>Time Complexity: </p>
                <p>Space Complexity:</p>
            </div>
            <div className='explanation'>
                <p>
                </p>
            </div>
        </div>
    )
}