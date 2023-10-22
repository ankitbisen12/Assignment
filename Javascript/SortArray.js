// Que B: Perform sorting of an array in descending order

//sorting an array in descending order
function bubbleSort(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          // swap elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  const arr = [12,10,15,11,14,13];
  bubbleSort(arr);
  console.log(arr);