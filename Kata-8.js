const repeatNumbers = data => {

  let str = "";

  for (let x of data) {
    str += ", ";
    for (let i = 0; i < x[1]; i++) {
      str += x[0];
    }
  }

  return str.slice(2);
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2], [1, 10], [1, 10]]));





/*

could also write an if... statement and only add a comma if more strings will follow: 
if ((i + 1) < data.length) output += ', ';

or 

placed in between first and second for loop: 
    if (string != '') string += ",";  

------------------------------------------------------
Alternate solutions:

const repeatNumbers = function(data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    (str !== "") ? str += ", " : str;
    for (let j = 0; j < data[i][1]; j++) {
      str += data[i][0]
    }
  }
  return str;
}

or

const repeatNumbers = (numbers) => {
  result = "";

  for (let i = 0; i < numbers.length; i++) {
    let j = 0;
    while (j < numbers[i][1]) {
      result += numbers[i][0];
      j++;
    }
    if (numbers.length > 1 && i < numbers.length-1)
    result += ", ";
  }
  return result;
};

or 

const repeatNumbers = data => {
  let temp = ""; let result =""; //Placeholders to store loop and result data
  init = 0; // Initilize - prevents ", " from being added on first loop.

  for (let x of data){ //Nested loop to check each input array
    for (let i = 0; i < x[1]; i++){ //Loop length is equal to index 1 of each array
      temp += x[0] //repeat storing index 0 value at each loop
    }

   if (init > 0){
    result += ", " + temp //Adds each array together seperated by ,
   } else {
    result += temp //adds temp if first loop of array
   }
    
   temp = ""; //Clears temp before entering next for of loop.
   init++ // increase init so ", " is added to all following loops
  };
  
  return result // Return combined result
};

*/