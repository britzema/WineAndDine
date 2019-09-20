//Wine.js contains functions to get wine pairings for different foods 
const unirest = require('unirest'); 
const readlineSync = require('readline-sync');

class Wine {
   //getFood asks and returns a user inputed dish
   static getFood() {
    let food = readlineSync.question("Dish you would like to find a wine pairing for: ");
    return food; 
   } 

  //winePairing( food ) reccomends wine based off an entered food. Food must be basic such as steak, salmon, tuna, etc
  static winePairing( food ) { 
    const APIKEY = "Your Spoonacular Key";
    let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?food=" + food; 
    unirest.get(requestString)  //put in request...
    .header("X-RapidAPI-Key", APIKEY)
    .end(result => {
    console.log(result.body.pairingText);
    });  
  };
}
//make available for other files
module.exports = Wine;

