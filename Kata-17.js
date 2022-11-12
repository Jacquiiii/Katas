const urlDecode = text => {
    let obj = {};
  
    let splitOne = text.split('=');
    let splitTwo = splitOne.split('&');
  
    return split;
}


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);