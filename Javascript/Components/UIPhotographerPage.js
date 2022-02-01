import UIModalContact from "./UIModalContact.js";
import UIPhotographerInfos from "./UIPhotographerInfos.js";
import Gallery from "./Gallery.js";
import Dropdown from "./Dropdown.js";

export default class UIPhotographerPage {
  constructor(dataStore) {
    this.medias = dataStore.medias;
    const url = new URLSearchParams(window.location.search);
    this.id = url.get("id");
    this.photographer = dataStore.photographers.find((photographer) => {
      return photographer.id === Number(this.id);
    });
    /*this.photographerMedia = dataStore.medias.filter(
      () => this.url === this.id
    );*/
    this.mediaPhotographerList = dataStore.medias.filter((media) => {
      return media.photographerId === Number(this.id);
    });
    this.photographerInfos = new UIPhotographerInfos(this.photographer);
    this.form = new UIModalContact(this.photographer);
    this.gallery = new Gallery(this.mediaPhotographerList);
    this.dropdown = new Dropdown(this.mediaPhotographerList, this);
    this.sumLike = this.mediaPhotographerList.reduce(
      (currentSumLike, medium) => {
        return medium.likes + currentSumLike;
      },
      0
    );
    this.likeElement = null;
    this.mediaLike = dataStore.medias.forEach((media) => {
      return media.likes;
    });
    const selectedFilter = document.getElementById("listOption");
    //this.dropdown.sortMedias(selectedFilter.value);
    selectedFilter.addEventListener("change", (event) => {
      this.dropdown.sortMedias(event.target.value);
      this.gallery.deleteSelect(event.target.value);
      this.drawGallery();
    });

    //this.dropdown.openCloseDropdown();*/
    //this.dropdown.filterByOption();
    //});
    ////A regarder
    /*this.options = document.querySelectorAll(".btn-option");
    this.options.forEach((option) => {
      const filterOptions = option.getAttribute("data-value");
      new Dropdown().filterByOption(filterOptions);
    });*/
    this.counterVal = 0;
  }

  drawGallery() {
    console.log(this.mediaPhotographerList);
    document.getElementById("box-list").innerHTML = this.getGalleryHtml();
    document.querySelector(".likes-price").innerHTML =
      this.displayLikesAndPrice();
    this.incrementLikes();
  }

  draw() {
    document.getElementById("presentation-photographer").innerHTML =
      this.getHtmlPhotographerPresentation();
    document.getElementById("header-form").innerHTML =
      this.getHtmlFormcontact();
    this.drawGallery();
    this.photographerInfos.eventListener();

    //this.dropdown.addEvent();
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

  // increment Likes
  displayLikesAndPrice() {
    return `<div>
  <span class="totalLike">${this.sumLike} <i class="fas fa-heart"></i></span>
  <span class="price"></span>
  </div>`;
  }

  incrementLikes() {
    const like = document.querySelectorAll(".likeHeart");
    for (let index = 0; index < like.length; index++) {
      like[index].addEventListener("click", () => {
        this.resetLikes(this.sumLike++);
      });
    }
  }

  resetLikes() {
    this.displaySumLikes(this.sumLike);
  }

  displaySumLikes(val) {
    document.getElementsByClassName("totalLikes").innerHTML = this.sumLike;

    document.querySelector(
      ".likes"
    ).innerHTML = `<span class="totalLikes">${val} <i class="fas fa-heart"></i></span>`;
  }
}
