import UINavigationBarTags from "./UINavigationBarTags.js";

export default class UINavBarHomePage {
  constructor(dataStore) {
    this.tags = dataStore.photographers.map((tag) => {
      return new UINavigationBarTags(tag);
    });
  }

  getHtml() {
    console.log("rototo", this.tags);
    return `
    ${this.tags.map((tag) => tag.getHtml()).join("")}`;
  }
}
