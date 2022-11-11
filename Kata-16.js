const makeCase = (input, name) => {

  // plan: 
  // - create all helper functions
  // - figure out a way to consider if case is an array
  // - call helper function based on case as return value with if statement

  const camelCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    arr[0].toLowerCase();
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join("");
    };

  const pascalCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join("");
    };

  const snakeCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    return arr.join("_");
    };

  const kebabCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    return arr.join("-");
    };

  const titleCase = input => {
    let lowercaseWords = input.toLowerCase();
    let arr = lowercaseWords.split(' ');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
      }
      return arr.join(" ");
    };

    const vowelCase = input => {
      let lowercaseWords = input.toLowerCase();
      for (let i = 0; i < lowercaseWords.length; i++) {
        if (lowercaseWords === "a" || lowercaseWords === "e" || lowercaseWords === "i" || lowercaseWords === "o" || lowercaseWords === "u") {
          lowercaseWords.replace(lowercaseWords[i], lowercaseWords[i].toUpperCase());
        }
      }
        return lowercaseWords;
      };
  


  if (name === "camel") {
    return camelCase(input);
  } else if (name === "pascal") {
    return pascalCase(input);
    } else if (name === "snake") {
      return snakeCase(input);
    } else if (name === "kebab") {
      return kebabCase(input);
    } else if (name === "title") {
      return titleCase(input);
    } else if (name ==="vowel") {
      return vowelCase(input);
    }

}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));