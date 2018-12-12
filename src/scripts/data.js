console.log("hello data.js")

//FOOD API

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

    getDataCuisine(userInput2) {
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25?q=${userInput2}`,
    //return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&count=10&radius=25",
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput2}`,
    //return fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=`${userInput2}`",
    //return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=${userInput2}`,
    return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&q=cuisines=${userInput2}`,      
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

// MEETUP API FUNCTION
const meetup = {
    getMeetup() {
        return fetch("https://www.eventbriteapi.com/v3/events/search/?q=Nashville&price=free&token=DMEKTJT35DBRP6PGFBXA") 
        //   headers: {
            // "Authorization": "Bearer DMEKTJT35DBRP6PGFBXA",
            // "Content-Type": "application/json"
        //   },
        //  mode:'no-cors',
        //  method: 'GET'
        // })
        .then(response => response.json())
        .then(get => console.log(get))
        .catch(error => console.log(error));
    }
  };
  meetup.getMeetup();

//BEGIN HANNAH'S NOTES

//Hannah's Eventbrite Info:
//Your personal OAuth token: DMEKTJT35DBRP6PGFBXA
    //App Key: 7PFTJRSZB5WACMYHB2
    // Client Secret: VRDFNY5MEAZDE72J2Q4FLKAWAUVBYCE3MP72VPQULXE4RDUGCR

    //Info we want from meetup array:
    //need a counter: 
    //events[i].name
    //events[i].description
    //events[i].url

    // const meetup = {
    //     getMeetup() {
    //         return fetch("https://www.eventbriteapi.com/v3/events/search/?q=Nashville&price=free&token=DMEKTJT35DBRP6PGFBXA") 
    //         .then(response => response.json());
    //     },
    //     queryResources(userInput) {
    //         return fetch(`http://localhost:8080/?q=${userInput}`)
    //         .then(get => console.log(get));
    //         // .catch(error => console.log(error));
    //     }
    //   };
    //   meetup.getMeetup();

    //END HANNAH'S NOTES:
    let eventNameData = function(userInput) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=U4OzVO9CVSB5hFKWe8jwfPW4GQ8NQJqF&city=Nashville&classificationName=music&keyword=${userInput}`)
        .then(events => events.json())
        .then(concertResults => {
            let allConcerts = concertResults._embedded.events
            allConcerts.forEach(result => {
                let artistHTML = result.name
                //let artistID = result._embedded.venues[0].id
                let venueHTML = result._embedded.venues[0].name
                console.log(artistHTML, venueHTML) 
                domBuilder.appendInputForm2(artistHTML, venueHTML)  
            })
        })
    };

