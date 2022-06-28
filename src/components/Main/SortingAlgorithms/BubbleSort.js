export function BubbleSortAnimations (array) {
    const animations = [];
    const secondArray = array.slice()
    console.log(secondArray)

    for(var i = 0; i < array.length; i++){
    
        // Last i elements are already in place 
        for(var j = 0; j < ( array.length - i -1 ); j++){
           animations.push([j, j+1])
           animations.push([j, j+1])
          // Checking if the item at present iteration
          // is greater than the next iteration
          if(array[j] > array[j+1]){
            // If the condition is true then swap them
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            animations.push([j, secondArray[j + 1]])
            animations.push([j + 1, secondArray[j]])
            
          }
          else {
            animations.push([j, secondArray[j]])
            animations.push([j + 1, secondArray[j + 1]])
          }
        }
      }
    console.log(animations)
    return animations
}