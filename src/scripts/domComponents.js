console.log("hello domComponents.js")

// This module is responsible for appending DOM components to the DOM.

const domComponents = {
    createDomElement (elementType, content, cssClass) {
      const element = document.createElement(elementType);
      element.textContent = content;
      if(cssClass) {
        element.classList.add(cssClass);
      }
      return element;
    }
  }

    // createDataDocumentFragments(dataArray) {
    //   // created a function that uses a data array as the argument
    //   let domFragments = {
    //     // created an object with 4 proprty keys and function values
    //     parks: document.createDocumentFragment(),
    //     foods: document.createDocumentFragment(),
    //     meets: document.createDocumentFragment(),
    //     concerts: document.createDocumentFragment()
    //   };
    //     dataArray.forEach(dataObj => {          // (elementType, content, cssClass)
    //       const dataSection = this.createDomElement("section", null, "data-section");
    //       // const linkElement = this.createDomElement("a", dataObj.name, null);
    //       // linkElement.setAttribute("href", dataObj.link);
    //       // Need to set attribute for formats other than text - email? textarea?
    //       // dataSection.appendChild(linkElement);
    //       if(dataObj.type === "Park") {
    //         domFragments.parks.appendChild(dataSection);
    //       } else if(dataObj.type === "Restaurant"){
    //         domFragments.foods.appendChild(dataSection);
    //       } else if(dataObj.type === "Meetup"){
    //         domFragments.meets.appendChild(dataSection);
    //       } else if(dataObj.type === "Concert"){
    //         domFragments.concerts.appendChild(dataSection);
    //       }
    //     });
    //     return domFragments;
    //     }