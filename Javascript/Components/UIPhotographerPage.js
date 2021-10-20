import UIModalContact from "./UIModalContactPage.js";
import UIPhotographerInfos from "./UIPhotographerInfos.js";

export default class UIPhotographerPage {
  constructor(dataStore) {
    const url = new URLSearchParams(window.location.search);
    this.id = url.get("id");
    this.photographerInfos = dataStore.photographers.find((photographer) => {
      return photographer.id === Number(this.id);
    });
    this.photographer = new UIPhotographerInfos(this.photographerInfos);
  }

  getHtml() {
    return this.photographer.getHtml();
  }
}
