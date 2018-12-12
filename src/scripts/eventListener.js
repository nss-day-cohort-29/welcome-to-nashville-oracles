console.log("hello eventListener.js")

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
