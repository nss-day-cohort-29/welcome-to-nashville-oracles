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

const data = {

    getDataCuisine(userInput) {
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25?q=${userInput}`,
    //return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`,
    //return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=`${userInput}`",
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput}`,
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=cuisines=${userInput}`,      
    //return fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138",    
    
            { headers: { "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab" } })
            .then(response => response.json())
            .then(parsedCuisines => {
                console.log(parsedCuisines.restaurants)
                let eatNow = parsedCuisines.restaurants;
                
                counter = 0;
                eatNow.forEach(cuisinesObj => {
                counter = ++this.count;                
                console.log(`RESTAURANT: ${cuisinesObj.restaurant.name} CUISINES: ${cuisinesObj.restaurant.cuisines}`)
                let nameHTML = cuisinesObj.restaurant.name;
                let addressHTML = cuisinesObj.restaurant.location.address;
                
                let divDisplayContainer = document.querySelector("#display-container");
                   
                let foodContainer = domComponents.createDomElement("article", "", "foodButtonClass");
                    divDisplayContainer.appendChild(foodContainer);
                    foodContainer.innerHTML = `                    
                    button type="clickSave" value = "${counter} ${cuisinesObj.restaurant.name} ${cuisinesObj.restaurant.location.address}" "id="food-save">Save</button>`

                    //<p>${Counter}. ${cuisinesObj.restaurant.name}: ${cuisinesObj.restaurant.location.address}</p>
                    //<button type="clickSave" id="food-save">Save</button>`
                    
                    })
                })
            }
        }
//     getDataRestaurants(consoleInput) {
         //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25?q=${userInput}`,
//         return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
//             { headers: { "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab" } })
//             .then(response => response.json())
//             .then(parsedRestaurants => {                
//                 console.log(parsedRestaurants.restaurant.name)
//                 parsedRestaurants.restaurant.forEach(restaurantsObj => {
//                     console.log(restaurantsObj.restaurant.location.address)
//                     if (restaurantsObj.restaurant.location.address === userInput) {
//                        console.log(restaurantsObj.restaurant.location.address)

//                        console.log(`Restaurant name:  ${foods.restaurant.name}
// //              Type of food:  ${foods.restaurant.cuisines}`)
// //              let foodHTML = foods.restaurant.name;
// //              let addressHTML = foods.restaurant.location.address;
// //              domComponents.appendResultsInput(domBuilder.resultsBuilder(foodHTML, addressHTML));
//                     }

//                 })
//             })
//         }


    // { headers: { "user-key": "b57275ff4bf32e085ee9ffa1aa7e6bab" } })
    //         .then(response => response.json())
    //         .then(parsedCuisines => {
    //             console.log(parsedCuisines.cuisines)
                
    //         parsedCuisines.cuisines.forEach(cuisinesObj => {
    //             console.log(cuisinesObj.cuisine.cuisine_name)
    //             if (cuisinesObj.cuisine.cuisine_name === userInput) {
    //                    console.log(cuisinesObj.cuisine.cuisine_name) 
    //                 }
                   
    //             })
    //         })
    //{
        // "results_found": 15,
        // "results_start": 0,
        // "results_shown": 15,
        // "restaurants": [
        //   {
        //     "restaurant": {
        //       "R": {
        //         "res_id": 17193654
        //       },
        //       "apikey": "b57275ff4bf32e085ee9ffa1aa7e6bab",
        //       "id": "17193654",
        //       "name": "Gojo Ethiopian Cafe & Restaurant",
        //       "url": "https://www.zomato.com/nashville/gojo-ethiopian-cafe-restaurant-nashville?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        //       "location": {
        //         "address": "415 Thompson Lane, Nashville 37211",
        //         "locality": "Woodbine",
        //         "city": "Nashville",
        //         "city_id": 1138,
        //         "latitude": "36.1110083000",
        //         "longitude": "-86.7467660000",
        //         "zipcode": "37211",
        //         "country_id": 216,
        //         "locality_verbose": "Woodbine, Nashville"
        //       },
        //       "switch_to_order_menu": 0,
        //       "cuisines": "African, Vegetarian",
        //       "average_cost_for_two": 25,
        //       "price_range": 2,
        //       "currency": "$",
        //       "offers": [],
        //       "opentable_support": 0,
        //       "is_zomato_book_res": 0,
        //       "mezzo_provider": "OTHER",
        //       "is_book_form_web_view": 0,
        //       "book_form_web_view_url": "",
        //       "book_again_url": "",
        //       "thumb": "",
        //       "user_rating": {
        //         "aggregate_rating": "4.2",
        //         "rating_text": "Very Good",
        //         "rating_color": "5BA829",
        //         "votes": "96"
        //       },
        //       "photos_url": "https://www.zomato.com/nashville/gojo-ethiopian-cafe-restaurant-nashville/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        //       "menu_url": "https://www.zomato.com/nashville/gojo-ethiopian-cafe-restaurant-nashville/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        //       "featured_image": "",
        //       "has_online_delivery": 0,
        //       "is_delivering_now": 0,
        //       "include_bogo_offers": true,
        //       "deeplink": "zomato://restaurant/17193654",
        //       "is_table_reservation_supported": 0,
        //       "has_table_booking": 0,
        //       "events_url": "https://www.zomato.com/nashville/gojo-ethiopian-cafe-restaurant-nashville/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        //       "establishment_types": []
        //     }
        //   },
        //   {
        //     "restaurant": {
        //       "R": {
        //         "res_id": 17192474
        //       },
        //       "apikey": "b57275ff4bf32e085ee9ffa1aa7e6bab",
        //       "id": "17192474",
        //       "name": "Horn of Africa",
        //       "url": "https://www.zomato.com/nashville/horn-of-africa-nashville?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        //       "location": {
        //         "address": "1041 Murfreesboro Pike, Nashville 37217",
        //         "locality": "Glenview",
        //         "city": "Nashville",
        //         "city_id": 1138,
        //         "latitude": "36.1274920000",
        //         "longitude": "-86.7124390000",
        //         "zipcode": "37217",
        //         "country_id": 216,
        //         "locality_verbose": "Glenview, Nashville"
        //       },
        //       "switch_to_order_menu": 0,
        //       "cuisines": "African",
        //       "average_cost_for_two": 10,
        //       "price_range": 1,
        //       "currency": "$",
        //       "offers": [],
        //       "opentable_support": 0,
        //       "is_zomato_book_res": 0,
        //       "mezzo_provider": "OTHER",
        //       "is_book_form_web_view": 0,
        //       "book_form_web_view_url": "",
        //       "book_again_url": "",
        //       "thumb": "",
        //       "user_rating": {
        //         "aggregate_rating": "3.3",
        //         "rating_text": "Average",
        //         "rating_color": "CDD614",
        //         "votes": "9"
        //       },
        //       "photos_url": "https://www.zomato.com/nashville/horn-of-africa-nashville/photos?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1#tabtop",
        //       "menu_url": "https://www.zomato.com/nashville/horn-of-africa-nashville/menu?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1&openSwipeBox=menu&showMinimal=1#tabtop",
        //       "featured_image": "",
        //       "has_online_delivery": 0,
        //       "is_delivering_now": 0,
        //       "include_bogo_offers": true,
        //       "deeplink": "zomato://restaurant/17192474",
        //       "is_table_reservation_supported": 0,
        //       "has_table_booking": 0,
        //       "events_url": "https://www.zomato.com/nashville/horn-of-africa-nashville/events#tabtop?utm_source=api_basic_user&utm_medium=api&utm_campaign=v2.1",
        //       "establishment_types": []
        //     }
        //   },







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