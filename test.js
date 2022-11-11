const organizeInstructors = instructors => {
  
  const extractValues = instructors.map(function(x) {
    return instructors[x];
  })

};



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));