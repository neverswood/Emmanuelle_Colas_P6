import UIModalContact from "./UIModalContact.js";
import UIPhotographerInfos from "./UIPhotographerInfos.js";
import Gallery from "./Gallery.js";

export default class UIPhotographerPage {
  constructor(dataStore) {
    const url = new URLSearchParams(window.location.search);
    this.id = url.get("id");
    this.photographer = dataStore.photographers.find((photographer) => {
      return photographer.id === Number(this.id);
    });
    this.mediaPhotographerList = dataStore.medias.filter((media) => {
      return media.photographerId === Number(this.id);
    });
    this.photographerInfos = new UIPhotographerInfos(this.photographer);
    this.form = new UIModalContact(this.photographer);
    this.gallery = new Gallery(this.mediaPhotographerList);
    const selectedFilter = document.getElementById("selectFilter");
    this.gallery.sortMedias(selectedFilter.value);
    selectedFilter.addEventListener("change", (event) => {
      this.gallery.sortMedias(event.target.value);
      this.drawGallery();
    });
    console.log("gam", this.gallery);
  }

  drawGallery() {
    document.getElementById("box-list").innerHTML = this.getGalleryHtml();
  }

  draw() {
    document.getElementById("presentation-photographer").innerHTML =
      this.getHtmlPhotographerPresentation();
    document.getElementById("header-form").innerHTML =
      this.getHtmlFormcontact();
    this.drawGallery();
    this.photographerInfos.eventListener();
  }

  getHtmlPhotographerPresentation() {
    return this.photographerInfos.getHtml();
  }

  getHtmlFormcontact() {
    return this.form.getHtml();
  }

  getGalleryHtml() {
    return this.gallery.getHtml();
  }
}
