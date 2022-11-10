// helper function that produces array of ingredients for a specific bakery
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

  let ingredientsA = ingredientCheck(bakeryA, recipes); // produces array of ingredients from bakeryA that match recipe

  let ingredientsB = ingredientCheck(bakeryB, recipes); // produces array of ingredients from bakeryB that match recipe

  let allIngredients = ingredientsA.concat(ingredientsB); // combines ingredients from bakeryA & bakeryB that match recipe

  for (recipe of recipes) {
    for (let i = 0; i < recipe.ingredients.length; i++) {

      let firstIngredient = recipe.ingredients[i] //saves first ingredient in recipe provided upcoming if condition is met

      let secondIngredient = recipe.ingredients[i+1] //saves second ingredient in recipe provided upcoming if condition is met (if more ingredients, would need to revamp function)

      if (allIngredients.includes(firstIngredient) && allIngredients.includes(secondIngredient)) {
        recipeName = recipe.name //checks if ingredients are included in the combined ingredient variable made prior to for loop and pushes the chosen recipe name to the recipe name variable if true
      }

    }
    
  };

  return recipeName;
}



// test conditions:

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

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



/*

Alternative methods:

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let winningRecipe = "";
  let firstIngredient;
  let secondIngredient;
  
  ingredientCheck = recipes.findIndex(function(obj, items) { 
    firstIngredient = obj.ingredients[0];
    secondIngredient = obj.ingredients[1];
    //console.log("receipe '" + obj.name + "' requires: " + firstIngredient + " and " + secondIngredient);
   
    for (ingredientA of bakeryA) {
      if (ingredientA === firstIngredient || ingredientA === secondIngredient){
        for (ingredientB of bakeryB) {
          if (ingredientB === firstIngredient || ingredientB === secondIngredient){
            winningRecipe += obj.name;
          }
        }
      } 
    } 
    }); 
    
  return winningRecipe;

}


or 


const chooseRecipe = (bakeryA, bakeryB, recipes) => {
  let arr1 = []; let arr2 = []; 

  let findIngr = (recipeBook,baker,possible) => {
    for (let recipe of recipeBook) {
      for (let x = 0; x <= recipe.ingredients.length; x++) {
        for (inventory of baker) {
          if (inventory === recipe.ingredients[x]) {
             possible.push(recipe.name);
          }
        }
      }
    }
  };

  findIngr(recipes,bakeryA,arr1);
  findIngr(recipes,bakeryB,arr2);

  let makeThis = (bakerA,bakerB) => {
    for (let x of bakerA) {
      for (let y of bakerB) {
        if (x === y) {return x;}        
      }
    }
  };

  return makeThis(arr1,arr2); 
}

*/