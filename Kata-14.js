const calculateChange = (total, cash) => {

  let changeBack = cash - total; //amount of change to give back
  let change = {}; //loop will add values to this object

  const coinTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickle", "penny"];
  const coinValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  //items in both arrays are in the same order so the loop's "i" will be the same index number for both

  let amount = 0;

  for (let i = 0; i < coinValues.length; i++) {
    amount = Math.floor(changeBack / coinValues[i]); //rounds down to nearest integer
    if (amount > 0) {
      change[coinTypes[i]] = amount; //pushes key/value to change object
      changeBack = changeBack % coinValues[i]; //returns remainder after previous loops value is added to change object
    }
  };

return change;
}


console.log(calculateChange(1787, 2000)); // output is { twoDollar: 1, dime: 1, penny: 3 }
console.log(calculateChange(2623, 4000)); // output is { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
console.log(calculateChange(501, 1000)); // output is { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
