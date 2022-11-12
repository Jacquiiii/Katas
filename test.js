const urlEncode = function(text) {
text = text.trim(" ");
let rep = "";

  for (let i = 0 ; i < text.length ; i++)
  if (text[i] === ' ') {
    rep += "%20";
  } else {
    rep += text[i];
  }
  return rep;
}


console.log(urlEncode("    Lighthouse Labs  "));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode(" blue is greener than purple for sure "));