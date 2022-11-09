const multiplicationTable = function (maxValue) {
  let str = "";
  
  for (let x = 1; x <= maxValue; x++) {
    for (let i = 1; i <= maxValue; i++) {
      str += (x * i) + " ";
    }
    str += "\n";
  }

  return str.slice(0, -1);
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));


/*
Alternative with blank line after

const multiplicationTable = function (maxValue) {
  let str = "";
  
  for (let x = 1; x <= maxValue; x++) {
    for (let i = 1; i <= maxValue; i++) {
      str += (x * i) + " ";
    }
    str += "\n";
  }

  return str;
}

*/