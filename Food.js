//Food.js contains functions to  transform user inputed ingredients into a dishes
const unirest = require('unirest'); 
const readlineSync = require('readline-sync');

class Food {
  //getNumIngredientsFromConsole() returns a user inputed int numIngredients
  static getNumIngredientsFromConsole() {
    let numIngredients = parseInt( readlineSync.question('Number of ingredients: ') );  //read number and convert to int
    while (isNaN(numIngredients)) {  //if invalid number, try again
      numIngredients = parseInt( readlineSync.question('Please enter a valid number of ingredients: ') );  //try again
    }
    return numIngredients
  }

  //getIngredientListFromConsole( numIngredients ) returns a user inputted array size of numIngredients
  static getIngredientListFromConsole( numIngredients ) {
    let ingredientList = [];    
    for(var i = 0; i < numIngredients; i++) {   //loop numIngredients times
      ingredientList.push(readlineSync.question('Enter Ingredient:'));  //push user inputted ingredient onto array
    }
    return ingredientList;
  }

  //ingredientsToDish( ingredients ) outputs dishes based off the parameter ingredients
  static ingredientsToDish( ingredients ) { 
    const APIKEY = "Your Spoonacular Key";  
    ingredients = ingredients.join("%2c");
    let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=" + ingredients; 
    unirest.get(requestString)  //put in request...
    .header("X-RapidAPI-Key", APIKEY)
    .end(result => { 
      if(result.status === 200){  //if successful search...
        console.log( "Here are your options!" )
        result.body.forEach(object => console.log(object.title));  //print out each name
      };
    });   
  };
}
//make available for other files
module.exports = Food;

