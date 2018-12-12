console.log("hello eventListener.js")

let parksBtn = document.getElementById("parkSearchBtn");
let bloop = document.getElementById("parksSearch");

parksBtn.addEventListener("click", function() {
    
    let fetch1 = data.parksFetch(bloop.value);
    return fetch1
    // console.log("parks search: " + fetch1);
     ;
 });

 