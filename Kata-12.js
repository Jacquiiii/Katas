const ingredientCheck = (bakery, recipes) => {

  for (let x of bakery) {
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (x === recipes[i].ingredients[j]) {
          console.log(recipes[i].ingredients[j]);
        } 
      }
    }
  }

}

let bakeryA = ['potatoes', 'bay leaf', 'raisins'];
let bakeryB = ['red bean', 'dijon mustard', 'apples'];
let recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  
  let recipeName = "";
  let ingredientsA = ingredientCheck(bakeryA, recipes);
  let ingredientsB = ingredientCheck(bakeryB, recipes);

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for
    }
  }
  
  return recipeName;
}



// test conditions:

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
      name: 'Potato Ganache',
      ingredients: ['potatoes', 'chocolate']
    },
    {
      name: 'Sweet Fish',
      ingredients: ['anchovies', 'honey']
    },
    {
      name: "Nima's Famous Dijon Raisins",
      ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));