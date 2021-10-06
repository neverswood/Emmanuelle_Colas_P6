import UIPhotographerItem from "./UIPhotographerItem.js";

export default class UIHomePage {
  ///////////////////////
  constructor(dataStore) {
    this.photographerItems = dataStore.photographers.map((photographer) => {
      return new UIPhotographerItem(photographer);
    });
  }

  getHtml() {
    console.log("koko", this.photographerItems);
    return `${this.photographerItems
      .map((photographerItem) => photographerItem.getHtml())
      .join("")}`;
  }
}
