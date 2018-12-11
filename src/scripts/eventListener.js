console.log("hello eventListener.js")


//                     *****           Grady              *****

let parksBtn = document.getElementById("parkSearchBtn");

parksBtn.addEventListener("click", function() {
     console.log("I am clicked!");
 });

 //                    *****           Hannah              *****

//BEGIN HANNAH BUTTON:
 let meetupBtn = document.getElementById("meetBtn");
    meetupBtn.addEventListener("click", function() {
    console.log(meetup.queryResources);
})
//END HANNAH BUTTON

//BEGIN HANNAH EVENT LISTENER FOR BUTTON CLICK:

const meetupEventListener = {
    handleMeetupSearchButton() {
        let searchInput = document.querySelector("input[name='searchInput']");
        let searchQuery = searchInput.value;

        data.queryResources(searchQuery)
        .then(searchResultsArray => {
            console.log(searchResultsArray);
            let resourcesFragments = domComponents.createResourcesDocument(searchResultsArray);
                console.log(resourcesFragments);
                domBuilder.appendAllResources(resourcesFragments);
        })
    }

};

//END HANNAH EVENT LISTENER FOR BUTTON CLICK




