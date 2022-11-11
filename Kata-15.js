const organizeInstructors = instructors => {
  
  let result = {}; //empty object where for loop will add the keys and properties

    for (let i = 0; i < instructors.length; i++) {

      //if statement prevents the same course being added multiple times
      if (result.hasOwnProperty(instructors[i].course) === false) {
        result[instructors[i].course] = []; //creates empty array for each course
      }

      result[instructors[i].course].push(instructors[i].name); //pushes the name to the empty array from the if statement above (for all iterations not limited like the if statement)
    };

  return result;
};



console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
