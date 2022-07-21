export const BubbleSortAlgorithm = (ARRAY) => {

  for (let i = 0; i < ARRAY.length; i++) {
    
    for (let j = i + 1; j < ARRAY.length; j++) {
      if (ARRAY[i] > ARRAY[j]) {
        let temp = ARRAY[i];
        ARRAY[i] = ARRAY[j];
        ARRAY[j] = temp;
      }
    }

  }

  return ARRAY;
  
}
