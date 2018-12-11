console.log("hello data.js")

//const key = "b57275ff4bf32e085ee9ffa1aa7e6bab";

// const fetchMeta = {
//   method: "get",
//   headers: { "user-key": key, "Accept": "application/json", },
// }
// const getLocationInfo = location => fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, fetchMeta);

// const getRestaurantsInfo = ({ entity_id, entity_type }) => fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${keyword}`, fetchMeta);
// console.log(getLocationInfo);

// This module interacts with the API, meaning all fetch calls
// to the json-server API will be in this module.
// API key: b57275ff4bf32e085ee9ffa1aa7e6bab


//getData() {
//    // This is the first query which returns a list of cuisines
//    return fetch (`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, fetchMeta);
//    .then(response => response.json())
//    .then(parsedData => {
//     ??? arrayOfData = parsedData;
//     ??? console.log(arrayOfData);
//     })

//  Couldn't get API key to work so put cuisines on 8088 to mess with
//         return fetch("http://localhost:8088/Cuisines")
//         .then(response => response.json())
//         .then(parsedData => {
//             dataArray = parsedData;
//             console.log(dataArray);
//     });
// }
// }
let foodData = {};

const data = {

    getDataCuisine(userInput) {
        //return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
            //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`,
            
            return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138",
    
    
            { headers: { "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab" } })
            .then(response => response.json())
            .then(parsedCuisines => {
                console.log(parsedCuisines.cuisines)
                
                parsedCuisines.cuisines.forEach(cuisinesObj => {
                    console.log(cuisinesObj.cuisine.cuisine_name)
                    if (cuisinesObj.cuisine.cuisine_name === userInput) {
                       console.log(cuisinesObj.cuisine.cuisine_name) 
                    }
                   
                })
            })
    },

    getDataRestaurants(userInput) {
        return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25?q=${userInput}`,
            { headers: { "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab" } })
            .then(response => response.json())
            .then(parsedRestaurants => {
                parsedRestaurants.forEach(restaurantsObj => {
                    console.log(restaurantsObj)

                })
            })
    }
}


// searchData.getResourcesFood()
// .then(fetchedFoodData => {
//     console.log(fetchedFoodData);
// })








// const data = {
// restaurantData(foodType) {
//     fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${foodType}`, {
//         headers: {
//             "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab"
//         }
//     })
//     .then(response => response.json());
//     .then(AllParks => {
//         AllParks.forEach(park => {
//             console.log("Park name: " + park.park_name)
//             console.log("Park address: " + park.mapped_location_address)
//             let parkHTML = park.park_name;
//             let parkAddressHTML = park.mapped_location_address;

//             domComponents.appendResultsInput(domBuilder.resultsBuilder(parkHTML, parkAddressHTML));
//         })
//     })
// },


//     .then(foods => foods.json())
//     .then(A => {
//         let allfoods = Allfoods.restaurants
//         allfoods.forEach(response => {
//            console.log(`Restaurant name:  ${foods.restaurant.name}
//              Type of food:  ${foods.restaurant.cuisines}`)
//              let foodHTML = foods.restaurant.name;
//              let addressHTML = foods.restaurant.location.address;
//              domComponents.appendResultsInput(domBuilder.resultsBuilder(foodHTML, addressHTML));
//         })
//     })
// },
// }


    // const data = {
    //     getData() {
    //       return fetch("https:developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city", {
    //         headers: {
    //           "user-key”: “b57275ff4bf32e085ee9ffa1aa7e6bab"
    //         }})

    //     })
    //        .then(function(response){
    //         response.json();
    //        })
    //        .then(response => response.json());
    //     },
    //     // queryResources(userInput) {
    //         //   return fetch(`http://localhost:8088/resources?q=${userInput}`)
    //         //   .then(response => response.json());
    //         // }
    //     };
    //     console.log(data);



// },

//     queryData(userInput) {
//         // return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${userInput}`)
//         return fetch("http://localhost:8088/resources?q=${userInput}")
//         .then(response => response.json());
//     }
// };