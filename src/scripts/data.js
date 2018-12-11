console.log("hello data.js")

    let eventNameData = function(userInput) {
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=U4OzVO9CVSB5hFKWe8jwfPW4GQ8NQJqF&city=Nashville&classificationName=music&keyword=${userInput}`)
        .then(events => events.json())
        .then(concertResults => {
            let allConcerts = concertResults._embedded.events
            allConcerts.forEach(result => {
                let artistHTML = result.name
                let artistID = result._embedded.venues[0].id
                let venueHTML = result._embedded.venues[0].name
                console.log(artistHTML, venueHTML, artistID) 
                domBuilder.appendInputForm2(artistHTML, venueHTML, artistID)  
            })
        })
    };

