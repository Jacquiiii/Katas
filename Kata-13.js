// plan: 
// create object for year, month, date
// write switch statement to convert month number to written number
// write if/else statement to convert day to number so no leading zeros and to add th, nd, rd, st depending on the day
// write console log statement calling key values and using concatenation with comma


const talkingCalendar = function(date) {
  
  let obj = {
    year: date.substring(0, 4),
    month: date.substring(5, 7),
    day: date.substring(8, 10),
  };

  if (obj.day === '02' || obj.day === '22') {
    obj.day *= 1;
    obj.day += "nd";
  } else if (obj.day === '01' || obj.day === '21' || obj.day === '31') {
    obj.day *= 1;
    obj.day += "st";
  } else if (obj.day === '03' || obj.day === '23') {
    obj.day *= 1;
    obj.day += "rd";
  } else {
    obj.day *= 1;
    obj.day += "th";
  }

  switch (obj.month) {
    case '01':
      obj.month = "January";
      break;
    case '02':
      obj.month = "February";
      break;
    case '03':
      obj.month = "March";
      break;
    case '04':
      obj.month = "April";
      break;
    case '05':
      obj.month = "May";
      break;
    case '06':
      obj.month = "June";
      break;
    case '07':
      obj.month = "July";
      break;
    case '08':
      obj.month = "August";
      break;
    case '09':
      obj.month = "September";
      break;
    case '10':
      obj.month = "October";
      break;
    case '11':
      obj.month = "November";
      break;
    case '12':
      obj.month = "December";
      break;
  }

  return obj.month + " " + obj.day + ", " + obj.year;

};


// test conditions:
console.log(talkingCalendar("2017/12/02")); // output: December 2nd, 2017
console.log(talkingCalendar("2007/11/11")); // output: November 11th, 2007
console.log(talkingCalendar("1987/08/24")); // August 24th, 1987
