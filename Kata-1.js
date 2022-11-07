const sumLargestNumbers = function(arr) {
  let largest = 0;
  let secondLargest = 0;

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > largest) {
    secondLargest = largest; //largest is tracked as 2nd largest so value doesn't get lost and can be used in else
    largest = arr[i]; // largest takes value of highest number
  } else if (arr[i] >= secondLargest && arr[i] != largest) {
    secondLargest = arr[i]; 
  }
}
  
  return largest + secondLargest;
}

console.log(sumLargestNumbers([1, 5, 8, 10, 12]));