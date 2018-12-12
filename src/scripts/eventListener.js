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



//END HANNAH EVENT LISTENER FOR BUTTON CLICK




//search button
 let concertsBtn = document.getElementById("musicBtn");
 concertsBtn.addEventListener("click", concertsValue);

 function concertsValue() {
    let userInput = document.getElementById("musicSearch").value;
    eventNameData(userInput);
 }

//save button
let saveConcertsBtn = document.getElementById("music-save");
saveConcertsBtn.addEventListener("click");
console.log("concert save button worked!");
