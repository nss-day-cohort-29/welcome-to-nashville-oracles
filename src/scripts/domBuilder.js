// This module is responsible for taking data, building out DOM components and returning those components.

console.log("hello domBuilder.js")

//****SEARCH */
const domBuilder =  {

  name: "Dom Builder Component",

  appendInputForm () {
    let divFormContainer = document.querySelector("#form-container");
   divFormContainer.innerHTML =
    `
    <article> 
    <input type="text" id="parksSearch" placeholder="parks by feature">
    <button type="submit" id="parkSearchBtn">Search Parks</button>
    </article>

    <article> 
    <input type="text" id="foodSearch" placeholder="restaurants by food type">
    <button type="submit" id="foodBtn">Search Restaurants</button>
    </article>
    
    <article>
    <input type="text" id="meetSearch" placeholder="meetups by topic">
    <button type="submit" id="meetBtn">Search Meetups</button>
    </article>
  
    <article>
    <input type="text" id="musicSearch" placeholder="concerts by genre">
    <button type="submit" id="musicBtn">Search Concerts</button>
    </article>`;
  },
  // **** RESULTS ****
  appendInputForm2 (results) {
  let divDisplayContainer = document.querySelector("#display-container");
  divDisplayContainer.innerHTML += `
  <article class="concert-article">
  <h4>${results}</h4>
  <button type="submit" id="music-save${artistID}">Save</button>
  </article>
  `
  console.log(results);
  }
}
//need unique id -> _embedded.events.id