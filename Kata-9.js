const camelCase = input => {
  
  let lowercaseWords = input.toLowerCase();
  let arr = lowercaseWords.split(' ');
  arr[0].toLowerCase();

  for (let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
    }

  return arr.join("");

  }


console.log(camelCase("Hello jacqui koroll"));
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


/* 

Alternative:

const camelCase = input => {
  newString = ""; 
  input = input.toLowerCase(); 

  for (let i = 0; i < input.length; i++){
    if (input[i] === " " && input[i + 1] === " "){
      // do nothing here, remains empty
    } 
    else if (input[i] === " "){
      newString += input[i + 1].toUpperCase(); 
      i++;
    } 
    else {newString += input[i];} 
  }

  return newString; 

*/
