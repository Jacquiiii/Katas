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