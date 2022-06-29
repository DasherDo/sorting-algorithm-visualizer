export function bubbleSortAnimations (array) {
    const animations = [];

    for(var i = 0; i < array.length; i++){
    
        // Last i elements are already in place 
        for(var j = 0; j < ( array.length - i -1 ); j++){
           animations.push([j, j+1])
           animations.push([j, j+1])
          // Checking if the item at present iteration
          // is greater than the next iteration
          if(array[j] > array[j+1]){
            // If the condition is true then swap them
            animations.push([j, array[j + 1]])
            animations.push([j + 1, array[j]])
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp

          }
          else {
            animations.push([j, array[j]])
            animations.push([j + 1, array[j + 1]])
          }
        }
      }
    return animations
}