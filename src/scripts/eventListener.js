console.log("hello eventListener.js")

// const eventListeners = {
//     handleSearchButton() {
//       let searchInput = document.querySelector("input[name='searchinput']");
//       let searchQuery = searchInput.value;
//       data.queryResources(searchQuery)
//       .then(searchResultsArray => {
//         console.log(searchResultsArray);
//         let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
//         console.log(resourcesFragments);
//         domBuilder.appendAllResources(resourcesFragments);
//       });
//     }
//   };

const eventListeners = {
    handleSearchButton() {
      let searchInput = document.querySelector("input[name='searchinput']");
      let searchQuery = searchInput.value;
  
      data.queryResources(searchQuery)
      .then(searchResultsArray => {
        console.log(searchResultsArray);
        let resourcesFragments = domComponents.createResourcesDocumentFragments(searchResultsArray);
        console.log(resourcesFragments);
        domBuilder.appendAllResources(resourcesFragments);
      });
    }
  };