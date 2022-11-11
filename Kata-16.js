const makeCase = (input, name) => {

// helper function to convert string to camel case --------------------------
  const camelCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join("");
    };

// helper function to convert string to pascal case -------------------------
  const pascalCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join("");
    };

// helper function to convert string to snake case --------------------------
  const snakeCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    return arr.join("_");
    };

// helper function to convert string to kebab case --------------------------
  const kebabCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    return arr.join("-");
    };

// helper function to convert string to title case --------------------------
  const titleCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join(" ");
    };

// helper function to convert string to vowel case --------------------------
  const vowelCase = input => {
    let newStr = "";
    for (let i in input) {
      if (input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        newStr += input[i].toUpperCase();
        } else {
          newStr += input[i].toLowerCase();
        }
      }
      return newStr;
    };

// helper function to convert string to consonant case ----------------------
  const consonantCase = input => {
    let newStr = "";
    for (let i in input) {
      if (input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
        newStr += input[i].toUpperCase();
      } else {
        newStr += input[i].toLowerCase();
        }
      }
      return newStr;
    };

// helper function to convert string to lower case --------------------------
  const lowerCase = input => {
    return input = input.toLowerCase();
  };
    
// helper function to convert string to upper case --------------------------
  const upperCase = input => {
    return input = input.toUpperCase();
  };

// if name is an array, this block is executed ------------------------------
  if (Array.isArray(name) === true) {

    // the next three loops sort the array
    let newArr = [];

    for (let a of name) {
      if (a === "camel" || a === "pascal" || a === "snake" || a === "kebab" || a === "title") {
        newArr.push(a);
      } 
    };
    
    for (let a of name) {
      if (a === "vowel" || a === "consonant") {
        newArr.push(a);
      }
    };

    for (let a of name) {
      if (a === "upper" || a === "lower") {
        newArr.push(a);
      }
    };

    // the next loop alters the input based on array names
    for (i=0; i < newArr.length; i++) {
      switch (newArr[i]) {
        case "camel":
          input = camelCase(input);
          break;
        case "pascal":
          input = pascalCase(input);
          break;
        case "snake":
          input = snakeCase(input);
          break;
        case "kebab":
          input = kebabCase(input);
          break;
        case "title":
          input = titleCase(input);
          break;
        case "vowel":
          input = vowelCase(input);
          break;
        case "consonant":
          input = consonantCase(input);
          break;
        case "lower":
          input = lowerCase(input);
          break;
        case "upper":
          input = upperCase(input);
          break;
      }
    };

    return input;
    
// if name is not an array, this block is executed --------------------------
  } else if (Array.isArray(name) === false) {

    switch (name) {
      case "camel":
        return camelCase(input);
        break;
      case "pascal":
        return pascalCase(input);
        break;
      case "snake":
        return snakeCase(input);
        break;
      case "kebab":
        return kebabCase(input);
        break;
      case "title":
        return titleCase(input);
        break;
      case "vowel":
        return vowelCase(input);
        break;
      case "consonant":
        return consonantCase(input);
        break;
      case "lower":
        return lowerCase(input);
        break;
      case "upper":
        return upperCase(input);
        break;
    }

  };

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["lower", "pascal"]));
console.log(makeCase("this is a string", ["lower", "vowel"]));
console.log(makeCase("this is a string", ["consonant", "kebab"]));


