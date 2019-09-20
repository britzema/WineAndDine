//test fiie for Food.js and Wine.js
//run: npm test
var Wine = require('./Wine.js');
var Food = require('./Food.js');


//test function getNumIngredientsFromConsole()
test ("User inputs 0 and 0 should be returned", () => {
    expect( Food.getNumIngredientsFromConsole()).toBe(0);
});

test ("User inputs 2 and 2 should be returned", () => {
    expect( Food.getNumIngredientsFromConsole()).toBe(2);
});

test ("user enters a non number and then a 6, a 6 should be returned", () => {
    expect( Food.getNumIngredientsFromConsole()).toBe(6);
});


//test function getIngredientListFromConsole(numIngredients), nothing to enter into the console
test ("0 passed in therefore empty array results", () => {
    expect( Food.getIngredientListFromConsole(0)).toEqual( [] );
});

test ("user enters 2 ingredients - salmon, and basil. An array of salmon and basil should be returned", () => {
    expect( Food.getIngredientListFromConsole(2)).toEqual( ["salmon", "basil"] );
});

//function ingredientsToDish is just an output function, nothing to test

//test function getFood()
test ("user enters 1 food - salmon, the string salmon should be returned", () => {
    expect( Wine.getFood()).toEqual("salmon");
});

//function winePairing is just an output function, nothing to test

