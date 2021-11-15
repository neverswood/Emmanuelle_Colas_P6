import UIModalContact from "./UIModalContact.js";
import UIPhotographerInfos from "./UIPhotographerInfos.js";
import Gallery from "./Gallery.js";
import Dropdown from "./Dropdown.js";

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
    this.dropdown = new Dropdown(this.mediaPhotographerList);
    const selectedFilter = document.getElementById("listOption");
    this.gallery.sortMedias(selectedFilter.value);
    selectedFilter.addEventListener("change", (event) => {
      this.gallery.sortMedias(event.target.value);
      this.gallery.deleteSelect(event.target.value);
      this.drawGallery();
      this.dropdown.openCloseDropdown();
      //this.dropdown.filterByOption();
    });
    ////A regarder
    /*this.options = document.querySelectorAll(".btn-option");
    this.options.forEach((option) => {
      const filterOptions = option.getAttribute("data-value");
      new Dropdown().filterByOption(filterOptions);
    });*/
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
    this.dropdown.addEvent();
    //this.dropdown.filterByOption();

    //document.getElementById("select-option").innerHTML = this.getDropdownHtml();
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

  /*getDropdownHtml() {
    return this.dropdown.getHtml();
  }*/
}
