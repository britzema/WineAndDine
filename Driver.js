//Driver.js is the driver file for Food.js and Wine.js
//run: node Driver.js
const readlineSync = require('readline-sync');
var Wine = require('./Wine.js');
var Food = require('./Food.js');

let choice = readlineSync.question("To find a wine pairing, enter 'wine'\nTo find recipes for your ingredients, enter 'dine'\nEnter: ");
while (choice != "wine" && choice != "dine") {  //if neither wine or dine is entered
    choice = readlineSync.question("Please enter either 'wine' or 'dine'\n");  //try again
}

if (choice == "dine"){
    let ingredientList = Food.getIngredientListFromConsole( Food.getNumIngredientsFromConsole() );  //first get # of ingredients then based off that get the ingredients
    let result = Food.ingredientsToDish( ingredientList ); 
}

else{ //if choice == "wine"
    Wine.winePairing( Wine.getFood() ); //get food type then wine to pair with it
}
