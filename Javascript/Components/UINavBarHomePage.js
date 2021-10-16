import UINavigationBarTags from "./UINavigationBarTags.js";

export default class UINavBarHomePage {
  constructor(dataStore) {
    this.newTags = new Set();
    this.tags = dataStore.photographers.map((photographer) => {
      return photographer.tags.forEach((photographer) => {
        this.newTags.add(photographer);
      });
    });

    this.navigationBarTags = new UINavigationBarTags([...this.newTags]);
  }

  getHtml() {
    console.log("blop", this.newTags);
    console.log("rototo", this.tags);
    console.log("bonbonbon", this.navigationBarTags);
    return `${this.navigationBarTags.getHtml()}`;
  }

  callEvent() {
    const tagsBtn = document.getElementById("btnTags");
    tagsBtn.addEventListener("click", function (element) {
      this.tags.newTags(elements);
    });
  }
}
