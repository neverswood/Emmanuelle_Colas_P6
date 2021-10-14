import UINavigationBarTags from "./UINavigationBarTags.js";

export default class UINavBarHomePage {
  constructor(dataStore) {
    /*this.navigationBarTags = dataStore.photographers.map((photographer) => {
      return new UINavigationBarTags(photographer);
    });*/
    ///return le set des 9 tags
    this.newTags = new Set();
    this.tags = dataStore.photographers.map((photographer) => {
      return photographer.tags.forEach((photographer) => {
        this.newTags.add(photographer);
      });
    });
    /*this.filterTags = dataStore.photographers.filter((tag) => {
      return tag.id === this.tags;
    });*/
    ///
    this.navigationBarTags = new UINavigationBarTags([...this.newTags]);
  }

  getHtml() {
    console.log("blop", this.newTags);
    console.log("rototo", this.tags);
    console.log("bonbonbon", this.navigationBarTags);
    return `${this.navigationBarTags.getHtml()}`;
    /*.map((navigationBarTags) => navigationBarTags.getHtml())
      .join("")}`;*/
    //return `${this.navigationBarTags.getHtml()}`;
    //${this.tags.map((tag) => tag.getHtml()).join("")};
  }
}
