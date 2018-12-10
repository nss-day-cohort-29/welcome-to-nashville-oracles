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
    //This is the form container
    divFormContainer.innerHTML = `
    <article id="feature-article">
      <input type="text" name="Features" id="feature-input" placeholder="Search by Feature">
      <button type="submit" id="park-search">Search PARKS</button>
    </article>

    <article id="cuisine-article">
      <input type="text" name="Cuisines" id="cuisine-input" placeholder="Search by Cuisine">
      <button type="submit" id="food-search">Search RESTAURANTS</button>
    </article>

    <article id="topic-article">
      <input type="text" name="Topics" id="topic-input" placeholder="Search by Topic">
      <button type="submit" id="meet-search">Search MEETUPS</button>
    </article>

    <article id="genre-article">
      <input type="text" name="Genres" id="genre-input" placeholder="Search by Genre">
      <button type="submit" id="music-search">Search CONCERTS</button>
    </article>`;

  // ********** DISPLAY *********
  let divDisplayContainer = document.querySelector("#display-container");
  divDisplayContainer.innerHTML = `
    <article id="park-article">
      <input type="text" name="Parks" id="park-return" placeholder="List of Parks">
      <button type="submit" id="park-save">Save</button>
    </article>

    <article id="food-article">
      <input type="text" name="Cuisines" id="food-return" placeholder="List of Restaurants">
      <button type="submit" id="food-save">Save</button>
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

  appendDataContainers () {
    let divFormContainer = document.querySelector("#form-container");
    // Class names start with the function with the venue appended -appendDataInputPark
    // ID's start with venue with function appended - musicInputBtn

    //PARK
    const parkFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(parkFormContainer);// elementType, content, class
    parkFormContainer.setAttribute("id", "feature-article");
    //FOOD
    const foodFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(foodFormContainer);// elementType, content, class
    foodFormContainer.setAttribute("id", "cuisine-article");
    //MEET
    const meetFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(meetFormContainer);// elementType, content, class
    meetFormContainer.setAttribute("id", "topic-article");
    //MUSIC
    const musicFormContainer = domComponents.createDomElement("article", "", null);
    divFormContainer.appendChild(musicFormContainer);// elementType, content, class
    musicFormContainer.setAttribute("id", "genre-article");
  },//end of function appendDataContainers

  appendAllData () {
    let divFormContainer = document.querySelector("#form-container");
    let divDisplayContainer = document.querySelector("#display-container");

    //PARK *********************************************************************
    //FOOD *********************************************************************
    //ADDING CUISINE RELATED TO THE FORM CONTAINER
    const foodInputContainer = domComponents.createDomElement("input", "", null);
    foodFormContainer.appendChild(foodInputContainer);// elementType, content, class
    foodInputContainer.setAttribute("id", "cuisine-input");
    document.getElementById("cuisine-input").addEventListener("click", function() {
      /// Add function here
    });
    const foodSearchContainer = domComponents.createDomElement("button", "", null);
    foodArticleContainer.appendChild(foodSearchContainer);// elementType, content, class
    foodSearchContainer.setAttribute("id", "cuisine-search");
    document.getElementById("cuisine-search").addEventListener("click", function() {
      /// Add function here
    });

    //ADDING RESTAURANT RELATED TO THE DISPLAY CONTAINER OF DATA RETURNS
    const foodReturnContainer = domComponents.createDomElement("input", "", null);
    foodFormContainer.appendChild(foodReturnContainer);// elementType, content, class
    foodReturnContainer.setAttribute("id", "food-return");
    document.getElementById("food-return").addEventListener("click", function() {
      /// Add function here
    });
    const foodSaveContainer = domComponents.createDomElement("button", "", null);
    foodArticleContainer.appendChild(foodSaveContainer);// elementType, content, class
    foodSaveContainer.setAttribute("id", "food-save");
    document.getElementById("food-save").addEventListener("click", function() {
      /// Add function here
    });
  }
};

    //MEET *********************************************************************
    //MUSIC ********************************************************************
    //end of function appendAllData


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
//};// end of domBuilder object