console.log("hello data.js")

// This module interacts with the API, meaning all fetch calls
// to the json-server API will be in this module.
// API key: b57275ff4bf32e085ee9ffa1aa7e6bab

//  bogas04/dom - Index.js -Showed how to fetch data from Zomato
//  with an Api key

const key = 'b57275ff4bf32e085ee9ffa1aa7e6bab';

const fetchMeta = {
  method: 'get',
  headers: { 'user-key': key, 'Accept': 'application/json', },
}
// const getLocationInfo = location => fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, fetchMeta);

// const getRestaurantsInfo = ({ entity_id, entity_type }) => fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${entity_id}&entity_type=${entity_type}&q=${keyword}`, fetchMeta);
// console.log(getLocationInfo);

//const data = { // Initialized "data" an object with two properties
    // - a function called getData() which I use to give me a list of
    //cuisines available in Nashville for the input form and a function
    // called queryData(userInput) which I pass the cuisine userInput into
    // to provide the ?q= info to populate the results container.

    //  getData() {
    //    // This is the first query which returns a list of cuisines
    //    return fetch (`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, fetchMeta);
    //    .then(response => response.json())
    //    .then(parsedData => {
    //        arrayOfData = parsedData;
    //        console.log(arrayOfData);
    //     })

        let arrayOfCuisines = [];
        fetch("http://localhost:8088/cuisines")
        .then(cuisines => cuisines.json())
        .then(parsedCuisines => {
            arrayOfCuisines = parsedCuisines;
            //console.log(arrayOfCuisines);       
        })
    //},

//     queryData(userInput) {
//         return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${userInput}`)
//         .then(response => response.json());
//     }
// };

// This module interacts with the API, meaning all fetch calls to the json-server API will be in this module.
// const data = {
//     getResources() {
//       return fetch("http://localhost:8088/resources")
//       // .then(function(response){
//       //   response.json();
//       // })
//       .then(response => response.json());
//     },
//     queryResources(userInput) {
//       return fetch(`http://localhost:8088/resources?q=${userInput}`)
//       .then(response => response.json());
//     }
//   };