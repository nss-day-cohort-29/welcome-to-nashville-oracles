console.log("hello data.js")

// MEETUP API FUNCTION
// const meetup = {
//     getMeetup() {
//         return fetch("https://www.eventbriteapi.com/v3/events/search/?q=Nashville&price=free&token=DMEKTJT35DBRP6PGFBXA") 
//         //   headers: {
//             // "Authorization": "Bearer DMEKTJT35DBRP6PGFBXA",
//             // "Content-Type": "application/json"
//         //   },
//         //  mode:'no-cors',
//         //  method: 'GET'
//         // })
//         .then(response => response.json())
//         .then(get => console.log(get))
//         .catch(error => console.log(error));
//     }
//   };
//   meetup.getMeetup();

//Hannah's Eventbrite Info:
//Your personal OAuth token: DMEKTJT35DBRP6PGFBXA
    //App Key: 7PFTJRSZB5WACMYHB2
    // Client Secret: VRDFNY5MEAZDE72J2Q4FLKAWAUVBYCE3MP72VPQULXE4RDUGCR

    //Info we want from meetup array:
    //need a counter: 
    //events[i].name
    //events[i].description
    //events[i].url


    const meetup = {
        getMeetup() {
            return fetch("https://www.eventbriteapi.com/v3/events/search/?q=Nashville&price=free&token=DMEKTJT35DBRP6PGFBXA") 
            .then(response => response.json());
        },
        queryResources(userInput) {
            return fetch(`http://localhost:8080/?q=${userInput}`)
            .then(get => console.log(get));
            // .catch(error => console.log(error));
        }
      };
    //   meetup.getMeetup();

