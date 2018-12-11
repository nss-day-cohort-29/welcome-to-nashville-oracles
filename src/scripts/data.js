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

const data = { // Initialized "data" an object with two properties
    // - a function called getData() and a function called
    // queryData(userInput) which I pass the cuisine userInput into
    // to provide the ?q= info to populate the results container.
    // Also use it to return restaurants
    getData() {
    //    // This is the first query which returns a list of cuisines
    //    return fetch (`https://developers.zomato.com/api/v2.1/cuisines?city_id=1138`, fetchMeta);
    //    .then(response => response.json())
    //    .then(parsedData => {
    //     ??? arrayOfData = parsedData;
    //     ??? console.log(arrayOfData);
    //     })

    //  Couldn't get API key to work so put cuisines on 8088 to mess with
        return fetch("http://localhost:8088/Cuisines")
        .then(response => response.json())
        .then(parsedData => {
            dataArray = parsedData;
            console.log(dataArray);
    });
}
}

    // const data = {
    //     getResources() {
    //       return fetch(“https:developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city“, {
    //         headers: {
    //           “user-key”: “e1d3af0b02cdacf4bfda4e12e2efcd99"
    //         }})
    //        .then(function(response){
    //         response.json();
    //        })
    //        .then(response => response.json());
    //     }//,
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