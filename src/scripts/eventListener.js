console.log("hello eventListener.js")

cuisinesArray = [
        {
          "cuisine": {
            "cuisine_id": 152,
            "cuisine_name": "African"
          }
        }       
    ]

let cuisineSearchBtn = document.querySelector("#cuisine-search");
cuisineSearchBtn.addEventListener("click", () => {
  let cuisineInput = document.querySelector("input[name='Cuisines']").value;
  let userInput = cuisineInput.value;
  console.log("Input values: ", userInput);

    data.getDataCuisine(userInput)

    });
// Query Zomato with the number in cuisine_id to get a list of matching
// restaurants (with their addresses) and populate <article id="restaurant-article">

/* <article id="food-article">
      <input type="text" name="Restaurants" id="food-return" placeholder="List of Restaurants">
      <button type="submit" id="food-save">Save</button>
</article> */

let restaurantSaveBtn = document.querySelector("#food-save");
restaurantSaveBtn.addEventListener("click", () => {
    let restVar = document.querySelector(`input[name="Restaurants"]`).value;
    console.log("Input values: ", restVar);
});

console.log("goodbye")

// Form Validation - If blank ... This field is required to search
// Add "required" to input element so can't return a blank
// Cuisine also each cuisine to start with a capital letter
// required pattern="[A-Z][A-Za-z' -]+"
//   Add to css file - displays when input is invalid
//   input:invalid {
//   border: 2px dashed red;
// }