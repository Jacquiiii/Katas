// 

const sumLargestNumbers = function(arr) {
  let largest = 0;
  let secondLargest = 0;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] != largest) {
    secondLargest = arr[i];
  }
}
  
  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 5, 8, 10, 12]));