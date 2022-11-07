const urlEncode = function(text) {
  trimmed = text.trim();
  let newText = "";
  for (i = 0; i < trimmed.length; i++) {
    if (trimmed[i] === " ") {
      newText += "%20";
    } else {
      newText += trimmed[i];
    }
  }
  return newText;
}


console.log(urlEncode("    Lighthouse Labs  "));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode(" blue is greener than purple for sure "));



