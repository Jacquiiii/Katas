const urlDecode = text => {

    text = text.replaceAll("=", " "); // Replaces "=" with a space.
   
    text = text.split("&"); // Changes string to array. If there is no "&", there is only one value in the array. If there is an "&", the part of the string before and after become separate values.
    
    let obj = {}; 

    for (let x of text) {
        let split = x.split(" "); // Splits into another array.
        obj[split[0]] = split[1].replaceAll("%20", " "); // Pushes first value in array to object key and second value to object propery, then replaces "%20" with spaces. "%20" is not removed earlier in the function or the loop won't push the right values to the object.
    };

    return obj;
}


console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

