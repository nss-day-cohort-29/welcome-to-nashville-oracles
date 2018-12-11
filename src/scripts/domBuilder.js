console.log("hello domBuilder.js")

const domBuilder =  {

  name: "Dom Builder Component",

  appendInputForm () {
    let divFormContainer = document.querySelector("#form-container");
   divFormContainer.innerHTML =
    `
    <article> 
    <input type="text" id="parksSearch" placeholder="Search Parks">
    <button type="submit" id="parkSearchBtn">Search Parks</button>
    </article>

    <article id="cuisine-article">
    <input type="text" name="Cuisines" id="cuisine-input" placeholder="Search by Cuisine">
    <button type="submit" id="cuisine-search">Search RESTAURANTS</button>
    </article>
    
    <article>
    <input type="text" id="meetSearch" placeholder="Meetups Search">
    <button type="submit" id="meetBtn">Search Meetups</button>
    </article>
  
    <article>
    <input type="text" id="musicSearch" placeholder="Concerts Search">
    <button type="submit" id="musicBtn">Search Concerts</button>
    </article>`

  // ********** DISPLAY *********
  let divDisplayContainer = document.querySelector("#display-container");
  divDisplayContainer.innerHTML = `
  <article id="park-article">
    <input type="text" name="Parks" id="park-return" placeholder="List of Parks">
    <button type="submit" id="park-save">Save</button>
  </article>
  <article id="food-article">
    <input type="text" name="Restaurants" id="food-return" placeholder="List of Restaurants">
    <button type="submit" id="food-save">Save</button>
  </article>
  <article id="meet-article">
    <input type="text" name="Meetups" id="meet-return" placeholder="List of Meetups">
    <button type="submit" id="meet-save">Save</button>
  </article>
  <article id = "music-article">
    <p>type="text" name="Concerts" id="music-return" placeholder="List of concerts"</p>
    <button type="submit" id="music-save">Save</button>
  </article>`
  },
}
//call me in main.js!()

//Notes: Check input type="text"?? for results list