const instructorWithLongestName = function(instructors) {
  let longest = 0;
  let result = "";
  for (i = 0; i < instructors.length; i++) {
    if (longest < instructors[i].name.length) {
      longest = instructors[i].name.length;
      result = instructors[i];
    } 
  }
  return result;
}



console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Jeremian", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "Domascup", course: "Web"}
]));