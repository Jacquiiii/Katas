const ingredientCheck = (bakery, recipes) => {
  let matchingIngredients = [];
  for (let x of bakery) {
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        if (x === recipes[i].ingredients[j]) {
          matchingIngredients.push(x);
        }
      }
    }
  }
  return matchingIngredients;
}


const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  
  let recipeName = "";
  let ingA = ingredientCheck(bakeryA, recipes);
  let ingB = ingredientCheck(bakeryB, recipes);

  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {

      if (recipes[i].ingredients[j] === ingA[0] || recipes[i].ingredients[j] === ingB[0]) {
        if (recipes[i].ingredients[j] === ingA[1] || recipes[i].ingredients[j] === ingB[1]) {
          recipeName += recipes[x].name;
        }
      }

    }
  }
  return recipeName;
}



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