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
    return `${this.navigationBarTags.getHtml()}`;
  }

  callEvent() {
    const tagsBtn = document.getElementById("btnTags");
    tagsBtn.addEventListener("click", function (element) {
      this.tags.newTags(element);
    });
  }
}
