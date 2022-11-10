// create object for year, month, date
// write switch statement to convert month number to written number
// figure out how to add nd or th depending on the day
// write console log statement calling key values and using concatenation with comma


const talkingCalendar = function(date) {
  
  let obj = {
    year: date.substring(0, 4),
    month: date.substring(5, 7),
    day: date.substring(8, 10),
  }

  return obj;

};



// test conditions:
console.log(talkingCalendar("2017/12/02")); // output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // output: November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987