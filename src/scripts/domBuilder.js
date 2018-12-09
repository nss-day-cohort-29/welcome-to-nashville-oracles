console.log("hello domBuilder.js");

// This module is responsible for taking data, building out DOM
// components and returning those components.

const domBuilder = {
    //  Creating an object with a property name: "Dom Builder Component"
    //  and 4 functions called
    //  appendInputForm
    //  appendDataContainers
    //  appendAllResources
    //  appendSearchContainer

  name: "Dom Builder Component",
//     // Initial test - appendInputForm : function() {
//     //   console.log("Hello");
//     // }
  appendInputForm () {
    let formContainer = document.querySelector("#form-container");
    
                                         // createDomElement (elementType, content, cssClass)

//PARK
      let parkFormContainer = domComponents.createDomElement("article", "feature.name", null);
      formContainer.appendChild(parkFormContainer);
      parkFormContainer.setAttribute("id", "park-article");

      let parkArticleContainer = document.querySelector("#park-article");

      parkArticleContainer.appendChild(domComponents.createDomElement("input", null, null));
      parkArticleContainer.appendChild(domComponents.createDomElement("button", null, null));
      parkArticleContainer.innerHTML = `<input type="text" name="feature_name" id="parkSearchInput" placeholder="Search by Feature">
                                  <button type="submit" id="parkSearchBtn">Search PARKS</button>`;


//FOOD
      
      let foodFormContainer = domComponents.createDomElement("article", "cuisine.name", null);
      formContainer.appendChild(foodFormContainer);
      foodFormContainer.setAttribute("id", "food-article");
      
      let foodArticleContainer = document.querySelector("#food-article");

      foodArticleContainer.appendChild(domComponents.createDomElement("input", null, null));
      foodArticleContainer.appendChild(domComponents.createDomElement("button", null, null));
      foodArticleContainer.innerHTML = `<input type="text" name="cuisine_name" id="foodSearchInput" placeholder="Search by Cuisine">
                                   <button type="submit" id="foodSearchBtn">Search RESTAURANTS</button>`;

//MEET
      let meetFormContainer = domComponents.createDomElement("article", "topic_name", null);
      formContainer.appendChild(meetFormContainer);
      meetFormContainer.setAttribute("id", "meet-article");

      let meetArticleContainer = document.querySelector("#meet-article");

      meetArticleContainer.appendChild(domComponents.createDomElement("input", null, null));
      meetArticleContainer.appendChild(domComponents.createDomElement("button", null, null));
      meetArticleContainer.innerHTML = `<input type="text" name="topic_name" id="meetSearchInput" placeholder="Search by Topic">
                                   <button type="submit" id="meetSearchBtn">Search MEETUPS</button>`;


//MUSIC
     let musicFormContainer = domComponents.createDomElement("article", "genre_name", null);
      formContainer.appendChild(musicFormContainer);
      musicFormContainer.setAttribute("id", "music-article");
      
      let musicArticleContainer = document.querySelector("#music-article");

      musicArticleContainer.appendChild(domComponents.createDomElement("input", null, null));
      musicArticleContainer.appendChild(domComponents.createDomElement("button", null, null));
      musicArticleContainer.innerHTML = `<input type="text" name="genre_name" id="musicSearchInput" placeholder="Search by Genre">
                                   <button type="submit" id="musicSearchBtn">Search CONCERTS</button>`;
    
     
                
          //  <article>
          //    <input type="text" name="fillInBlank" id="parksSearch" placeholder="Search by Feature">
          //    <button type="submit" id="parksBtn">Search PARKS</button>
          //  </article>
          //  <article id="food-article">
          //    <input type="text" name="cuisine_name" id="foodSearch" placeholder="Search by Cuisine">
          //    <button type="submit">Search RESTAURANTS</button>
          //  </article>
          //  <article>
          //    <input type="text" name="fillInBlank" id="meetSearch" placeholder="Search by Topic">
          //    <button type="submit" id="meetBtn">Search MEETUPS</button>
          //  </article>
          //  <article>
          //    <input type="text" name="fillInBlank" id="musicSearch" placeholder="Search by Genre">
          //    <button type="submit" id="musicBtn">Search CONCERTS</button>
          //  </article>
          // `;
  },     

  appendDataContainers () {
    let divContainer = document.querySelector("#display-container");
     
  },     
      
  appendAllResources (fragmentsObj) {
//       let articlesContainer = document.querySelector("#articles-container");
//       let videosContainer = document.querySelector("#videos-container");
//       articlesContainer.innerHTML = "";
//       videosContainer.innerHTML = "";
//       articlesContainer.appendChild(fragmentsObj.articles);
//       videosContainer.appendChild(fragmentsObj.videos);
  },
  appendSearchContainer () {
    //   let divContainer = document.querySelector("#display-container");
    //   const searchContainer = domComponents.createDomElement("article", null, "search-container");
    //   searchContainer.appendChild(domComponents.createDomElement("label", "Search", null));
    //   let searchInput = document.createElement("input");
    //   searchInput.setAttribute("type", "text");
    //   searchInput.setAttribute("name", "searchinput");
    //   searchContainer.appendChild(searchInput);
    //   let searchButton = domComponents.createDomElement("button", "Search", null);
    //   searchButton.setAttribute("id", "search-button");
    //  // searchButton.addEventListener("click", eventListeners.handleSearchButton);
    //  // searchContainer.appendChild(searchButton);
    //  // divContainer.appendChild(searchContainer);
  }
};