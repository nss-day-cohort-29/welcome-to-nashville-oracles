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

<<<<<<< HEAD
    <article id="cuisine-article">
    <input type="text" name="cuisines" id="cuisine-input" placeholder="restaurants by food type">
    <button type="submit" id="cuisine-search">Search Restauarants</button>
=======
    <article> 
    <input type="text" id="foodSearch" placeholder="restaurants by food type">
    <button type="submit" id="foodBtn">Search Restaurants</button>
>>>>>>> master
    </article>
    
    <article>
    <input type="text" id="meetSearch" placeholder="meetups by topic">
    <button type="submit" id="meetBtn">Search Meetups</button>
    </article>
  
    <article>
    <input type="text" id="musicSearch" placeholder="concerts by genre">
    <button type="submit" id="musicBtn">Search Concerts</button>
    </article>`;
<<<<<<< HEAD

  // ********** DISPLAY *********
  let divDisplayContainer = document.querySelector("#display-container");
  divDisplayContainer.innerHTML = `
    <article id="park-article">
      <input type="text" name="Parks" id="park-return" placeholder="List of Parks">
      <button type="submit" id="park-save">Save</button>
    </article>

    <article id="food-article">
      <input type="text" name="Restaurants" id="food-return" placeholder="List of Restaurants">
      <button type="clickSave" id="food-save">Save</button>
    </article>

    <article id="meet-article">
      <input type="text" name="Meetups" id="meet-return" placeholder="List of Meetups">
      <button type="submit" id="meet-save">Save</button>
      </article>

    <article id="music-article">
      <input type="text" name="Concerts" id="music-return" placeholder="List of concerts">
      <button type="submit" id="music-save">Save</button>
    </article>`;
  }, 
=======
  },
  // **** RESULTS ****
  appendInputForm2 (results) {
  let divDisplayContainer = document.querySelector("#display-container");
  divDisplayContainer.innerHTML += `
  <article class="concert-article">
  <h4>${results}</h4>
  <button type="submit" id="music-save">Save</button>
  </article>
  `
  
  }
>>>>>>> master
}
//call me in main.js!()

//Notes: Check input type="text"?? for results list

//              ******        BEGIN HANNAH SECTION      ******




//              ******        END HANNAH SECTION      ******
//need unique id -> _embedded.events.id
