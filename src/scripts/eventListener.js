console.log("hello eventListener.js")

cuisinesArray = [
        {
          "cuisine": {
            "cuisine_id": 152,
            "cuisine_name": "African"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 1,
            "cuisine_name": "American"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 3,
            "cuisine_name": "Asian"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 193,
            "cuisine_name": "BBQ"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 5,
            "cuisine_name": "Bakery"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 227,
            "cuisine_name": "Bar Food"
          }
        },
        {
          "cuisine": {
            "cuisine_id": 270,
            "cuisine_name": "Beverages"
          }
        },
    ]

// ******* create sample data for restaurant list return - id - name - address

// ******* change the element type on the
/* <article> 
    
</article> */
// cuisinesArray = [
//   {
//     "cuisine": {
//       "cuisine_id": 152,
//       "cuisine_name": "African"
//     }
//   },
/* <article id="cuisine-article">
  <input type="text" name="Cuisines" id="cuisine-input" placeholder="Search by Cuisine">
  <button type="submit" id="cuisine-search">Search RESTAURANTS</button>
</article> */

// const eventListeners = {
//   handleSearchButton() {
//     let searchInput = document.querySelector("input[name='searchinput']");
//     let searchQuery = searchInput.value;

//     data.queryResources(searchQuery)
//     .then(searchResultsArray => {
//       console.log(searchResultsArray);
//       let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
//       console.log(resourcesFragments);
//       domBuilder.appendAllResources(resourcesFragments);
//     });
//   }
// };

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


// const eventListeners = {
//     handleSearchButton() {
//       let searchInput = document.querySelector("input[name='searchinput']");
//       let searchQuery = searchInput.value;
//       data.queryResources(searchQuery)
//       .then(searchResultsArray => {
//         console.log(searchResultsArray);
//         let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
//         console.log(resourcesFragments);
//         domBuilder.appendAllResources(resourcesFragments);
//       });
//     }
//   };
// var inventory = [
//     {name: 'apples',
//      quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];

// function isCherries(fruit) {
  //     return fruit.name === 'cherries';
// }

// console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }