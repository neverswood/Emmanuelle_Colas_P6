import UIPhotographerItem from "./UIPhotographerItem.js";
import UIFilterTags from "./UIFilterTags.js";

export default class UIHomePage {
  constructor(dataStore) {
    this.photographerItems = dataStore.photographers.map((photographer) => {
      return new UIPhotographerItem(photographer);
    });
    this.tags = new UIFilterTags(this.tagsFiltered);
  }

  getHtml() {
    console.log("koko", this.photographerItems);
    return `${this.photographerItems
      .map((photographerItem) => photographerItem.getHtml())
      .join("")}`;
  }

  getHtmlTags() {
    return `${this.tags.getHtml1()}`;
  }
}
