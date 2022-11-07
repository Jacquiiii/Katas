const conditionalSum = function(values, condition) {

  if (values.length === 0) {
    return 0;

  } else if (condition === "odd") {
    let oddTotal = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 !== 0) {
        oddTotal += values[i];
      }
    }
    return oddTotal;

  } else if (condition === "even") {
    let evenTotal = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        evenTotal += values[i];
      }
    }
    return evenTotal;
  }
  
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));