//functions seem to work but DOM is not being updated trying helper functions or digger deeper into HTML or CSS to see if there are errors, shouldnt need a eventlisten for load of page to display DOM changes, trying "hidden" property

var sideOptions = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
]
var mainOptions = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]
var dessertOptions = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]

//buttons selected inputs(radio buttons) are called in fuctions below
var letsCookButton = document.querySelector(".lets-cook-button");
letsCookButton.addEventListener("click", displayShouldMakeDish);

//main function pulls in the random numbers and arrays selected and selections the box with the cooking pot and inserts strings of dish options that were randomly selected. this seems to be the primary issue, leading to need to check CSS and HTML for errors that are not allowing DOM updates
function displayShouldMakeDish() {
  var selectInput = dishSelection();
  var retrievedDish = retrieveADish(selectInput);
  var shouldMake = document.querySelector(".you-should-make");
  shouldMake.innerHTML =
      `<div class="dish">
      <h4>You should make:</h4>${retrievedDish}!</div>` //allows for whatever dish from the arrays and function to be displayed
}
console.log(retrieveADish) // not working due to an input not being selected how is this tested if inputs reset on page load?

//random index functions
function getRandomNumber(array) {
    return Math.floor(Math.random() * array.length);
  } //takes in one of dish options array does math and returns a number
  
function getRandomSide(array) {
var sideIndex = getRandomNumber(array);
    for (var i = 0; i < sideOptions.length; i++) {
        return sideOptions[sideIndex];
      }
    } //allows getRandomNumber to reference each specific dish option array one made for each option. random number and calling of arrays is working as intended
  
function getRandomMain(array) {
var mainIndex = getRandomNumber(array);
    for (var i = 0; i < mainOptions.length; i++) {
        return mainOptions[mainIndex];
    }
  }
  
function getRandomDessert(array) {
var dessertIndex = getRandomNumber(array);
    for (var i = 0; i < dessertOptions.length; i++) {
        return dessertOptions[dessertIndex];
    }
  }

function dishSelection() {
var input = document.querySelectorAll('input[name="radio-options"]'); //is name for all radio buttons
    for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
        return input[i].value;
    }
  }
} // looks at which input is selected so the correct array can be referenced

function retrieveADish(selectInput) {
    if (selectInput === "side") {
        var sideDish = getRandomSide(sideOptions);
        return sideDish;
    console.log(sideOptions) // not getting return not working in dev tools but also not giving any errors? logic looks correct? HTML matches ID
  } else if (selectInput === "main") {
        var mainDish = getRandomMain(mainOptions);
        return mainDish;
  } else if (selectInput === "dessert") {
        var dessertDish = getRandomDessert(dessertOptions);
        return dessertDish;
  } else if (selectInput === "meal") {
        var entireMeal = `${getRandomMain(mainOptions)} with a side of ${getRandomSide(sideOptions)} and ${getRandomDessert(dessertOptions)} for dessert`;
        return entireMeal
  }
} //uses selected dish and later intarpolates to return the whole mean using all 3 arrays

