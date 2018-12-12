console.log("hello eventListener.js")


let cuisineSearchBtn = document.getElementById("cuisine-search");
cuisineSearchBtn.addEventListener("click", findfunction);

function findfunction() {
  let userInput = document.getElementById("cuisine-input").value;
  console.log(userInput)
  
    data.getDataCuisine(userInput)

    let displayInfo = document.getElementById("display-container");
     let header = document.createElement("h4");
     displayInfo.innerHTML = " ";
     header.innerHTML = "Click and Save Your Restaurant";
     displayInfo.appendChild(header);

};
// Query Zomato with the number in cuisine_id to get a list of matching
// restaurants (with their addresses) and populate <article id="restaurant-article">

/* <article id="food-article">
      <input type="text" name="Restaurants" id="food-return" placeholder="List of Restaurants">
      <button type="submit" id="food-save">Save</button>
</article> */

// let restaurantSaveBtn = document.querySelector("#food-save");
// restaurantSaveBtn.addEventListener("click", () => {
//     let restaurantInput = document.querySelector(`input[name="Restaurants"]`).value;
//     let consoleInput = restaurantInput.value;
//     console.log("Input values: ", consoleInput);

//     data.getDataRestaurants(consoleInput)

// });

// console.log("goodbye")

// Form Validation - If blank ... This field is required to search
// Add "required" to input element so can't return a blank
// Cuisine also each cuisine to start with a capital letter
// required pattern="[A-Z][A-Za-z' -]+"
//   Add to css file - displays when input is invalid
//   input:invalid {
//   border: 2px dashed red;
// }