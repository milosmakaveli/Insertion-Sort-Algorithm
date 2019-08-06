insertionSort = array => {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] < array[0]) {
      //move current element to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else if (array[i] > array[i - 1]) {
      //mantain element position
      continue;
    } else {
      //find where element should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          //move element
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
  return array;
};

const array = [6, 2, 3, 9, 12, 7, 15];

const sorted = insertionSort(array);

console.log(sorted);
