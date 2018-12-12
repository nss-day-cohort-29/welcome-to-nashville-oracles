console.log("hello domComponents.js")

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