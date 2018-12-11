console.log("hello eventListener.js")

let parksBtn = document.getElementById("parkSearchBtn");

parksBtn.addEventListener("click", function() {
     console.log("I am clicked!");
 });

 
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

let cuisineSearchBtn = document.querySelector("#cuisine-search");
cuisineSearchBtn.addEventListener("click", () => {
    let nameVar = document.querySelector('input[name="Cuisines"]').value;
    console.log("Input values: ", nameVar);

    let findId = "";
    function isCuisine(toBeFound) { 
        return toBeFound.cuisine_name === nameVar;
    }
    findId = cuisinesArray.find(isCuisine);            
    console.log(findId); 
    // { cuisine_id: 270, cuisine_name: "Beverages" }
});

// Query Zomato with the number in cuisine_id to get a list of matching
// restaurants (with their addresses) and populate <article id="restaurant-article">
    //   <input type="text" name="Restaurants" id="food-return" placeholder="List of Restaurants">
    //   <button type="submit" id="food-save">Save</button>
    // </article>
//

let restaurantSaveBtn = document.querySelector("#food-save");
restaurantSaveBtn.addEventListener("click", () => {
    let restVar = document.querySelector('input[name="Restaurants"]').value;
    console.log("Input values: ", restVar);
});

/* <article id="food-article">
    <input type="text" name="Cuisines" id="food-return" placeholder="List of Restaurants">
    <button type="submit" id="food-save">Save</button>
</article> */