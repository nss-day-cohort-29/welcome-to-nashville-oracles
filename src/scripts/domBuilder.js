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

    <article> 
    <input type="text" id="foodSearch" placeholder="Restaurants Search">
    <button type="submit" id="foodBtn">Search Restaurants</button>
    </article>
    
    <article>
    <input type="text" id="meetSearch" placeholder="Meetups Search">
    <button type="submit" id="meetBtn">Search Meetups</button>
    </article>
  
    <article>
    <input type="text" id="musicSearch" placeholder="Concerts Search">
    <button type="submit" id="musicBtn">Search Concerts</button>
    </article>`
  }
}
//call me in main.js!()
