console.log("hello domBuilder.js");

// This module is responsible for taking data, building out DOM
// components and returning those components.

const domBuilder = {
    //  Creating an object with a property name: "Dom Builder Component"
    //  and 4 functions called
    //  appendInputForm
    //  appendDataContainers
    //  appendAllData
    //  appendSearchContainer

  name: "Dom Builder Component",
  appendInputForm () {
    let divFormContainer = document.querySelector("#form-container");

  appendDataContainers () {
    let divFormContainer = document.querySelector("#display-container");
    // Class names start with the function with the venue appended -appendDataInputPark
    // ID's start with venue with function appended - musicInputBtn

    //PARK
    const parkFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(parkFormContainer);// elementType, content, class
    parkFormContainer.setAttribute("id", "park-article");
    parkFormContainer.innerHTML = `<article></article>`;
    
    //FOOD
    const foodFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(foodFormContainer);// elementType, content, class
    foodFormContainer.setAttribute("id", "food-article");
    foodFormContainer.innerHTML = `<article></article>`;

    //MEET
    const meetFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(meetFormContainer);// elementType, content, class
    meetFormContainer.setAttribute("id", "meet-article");
    meetFormContainer.innerHTML = `
    <article>
      <input type="text" name="Meetup" id="meetInput" placeholder="Search by Topic">
      <button type="submit" id="meetSearchBtn">Search MEETUPS</button>
      <button type="submit" id="meetSaveBtn">Save</button>
    </article>
    `;
    //MUSIC
    const musicFormContainer = domComponents.createDomElement("article", "", null);
    formContainer.appendChild(musicFormContainer);// elementType, content, class
    musicFormContainer.setAttribute("id", "music-article");
    musicFormContainer.innerHTML = `
    <article>
      <input type="text" name="Concert" id="musicInput" placeholder="Search by Genre">
      <button type="submit" id="musicSearchBtn">Search CONCERTS</button>
      <button type="submit" id="musicSaveBtn">Save</button>
    </article>
    `;
  },//end of function appendDataContainers

  //appendAllData (fragmentsObj) {
    //let formContainer = document.querySelector("#display-container");
    // Class names start with the function with the venue appended -appendDataInputPark
    // ID's start with venue with function appended - musicInputBtn

//  ******* The argument references to dom.Components.js
//      let domFragments = {
        // created an object with 4 proprty keys and values
        // parks: document.createDocumentFragment(),
        // foods: document.createDocumentFragment(),
        // meets: document.createDocumentFragment(),
        // concerts: document.createDocumentFragment()

  appendAllData () {
    let formContainer = document.querySelector("#display-container");

    //PARK *********************************************************************
    let parkArticleContainer = document.querySelector("#park-Article");
    foodArticleContainer.appendChild(domComponents.createDomElement("input", null, null));
    foodFormContainer.setAttribute("id", "food-article");
    foodFormContainer.innerHTML = `
    <article>
      <input type="text" name="Restaurant" id="foodInput" placeholder="Search by Cuisine">
      <button type="submit" id="foodSearchBtn">Search RESTAURANTS</button>
      <button type="submit" id="foodSaveBtn">Save</button>
    </article>
    `;

    parkArticleContainer.appendChild(domComponents.createDomElement("button", "Save", null));
    parkFormContainer.innerHTML = `
      <input type="text" name="Park" placeholder="Search by Feature">
      <button type="submit">Search PARKS</button>
    `;
    parkFormContainer.setAttribute("id", "park-Save");
    //parkFormContainer.addEventListener("click", eventListeners.handleSearchButton);
    document.getElementById("park-Save").addEventListener("click", function() {
      /// Save function here
   });
   
    //FOOD *********************************************************************

    const foodInputContainer = domComponents.createDomElement("input", "", null);
    foodFormContainer.appendChild(foodInputContainer);// elementType, content, class
    foodInputContainer.setAttribute("id", "food-input");
    foodFormContainer.innerHTML =  `
      <input type="text" name="Restaurant" placeholder="Search by Cuisine">`;
    document.getElementById("food-input").addEventListener("click", function() {
      /// Add function here
    });
    const foodSearchContainer = domComponents.createDomElement("button", "", null);
    foodArticleContainer.appendChild(foodSearchContainer);// elementType, content, class
    foodSearchContainer.setAttribute("id", "food-search");
    foodSearchContainer.innerHTML =  `
      <button type="submit">Search RESTAURANTS</button>`;
    document.getElementById("food-search").addEventListener("click", function() {
      /// Add function here
    });
    const foodSaveContainer = domComponents.createDomElement("button", "", null);
    foodArticleContainer.appendChild(foodSaveContainer);// elementType, content, class
    foodSaveContainer.setAttribute("id", "food-save");
    foodSaveContainer.innerHTML =  `
      <button type="submit">Save</button>`;
    document.getElementById("food-save").addEventListener("click", function() {
      /// Add function here
    });

    //MEET *********************************************************************
    let meetArticleContainer = document.querySelector("#meet-article");
    //meetArticleContainer.innerHTML = "";
    //meetArticleContainer.appendChild(fragmentsObj.meets);
    meetArticleContainer.appendChild(domComponents.createDomElement("input", null, "appendDataInputMeet"));
    meetArticleContainer.appendChild(domComponents.createDomElement("button", "Save", "appendDataBtnMeet"));
    //MUSIC
    let musicArticleContainer = document.querySelector("#music-article");
    //musicArticleContainer.innerHTML = "";
    //musicArticleContainer.appendChild(fragmentsObj.concerts);
    musicArticleContainer.appendChild(domComponents.createDomElement("input", null, "appendDataInputMusic"));
    musicArticleContainer.appendChild(domComponents.createDomElement("button", "Save", "appendDataBtnMusic"));
  },//end of function appendAllData


//   appendAllResources (fragmentsObj) {
  //   let videosContainer = document.querySelector("#videos-container");
  // videosContainer.innerHTML = "";
  // videosContainer.appendChild(fragmentsObj.videos);
// }, end of function appendAllResources

  //appendSearchContainer () {
    //This function is useful for querying a database to find one
    //specific item, but we are pulling down a list of choices and
    //picking one ... So we need a scrolling list kind of pulldown "menu"
  //     let divContainer = document.querySelector("#display-container");

  //     const searchContainer = domComponents.createDomElement("article", null, "search-container");

  //     searchContainer.appendChild(domComponents.createDomElement("label", "", null));
  //     let searchInput = document.createElement("input");
  //     searchInput.setAttribute("type", "text");
  //     searchInput.setAttribute("name", "searchinput");
  //     searchContainer.appendChild(searchInput);
  //     //testit = searchContainer.innerHTML;
  //     //console.log(testit);
      
  //     let searchButton = domComponents.createDomElement("button", "Search", null);
  //     searchButton.setAttribute("id", "search-button");
  //     searchButton.addEventListener("click", eventListeners.handleSearchButton);
  //     searchContainer.appendChild(searchButton);
  //     divContainer.appendChild(searchContainer);
  // }//end of function appendSearchContainer
};// end of domBuilder object