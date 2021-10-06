import Photographer from "../Data/Photographer.js";

export default class UIPhotographerItem {
  constructor(photographer) {
    //
    this.photographer = photographer; //
  }

  getHtml() {
    return `
    <a href="/photographer.html?id=${this.photographer.id}">
    <img src="/Sample_Photos/Photographers_ID_Photos/${
      this.photographer.portrait
    }" alt=""/>
    <h2>${this.photographer.name}</h2>
    </a>
    <div class="photographer_presentation">
    <h3>${this.photographer.city + " , " + " " + this.photographer.country}</h3>
    <p>${this.photographer.tagline}</p>
    <span>${this.photographer.price + "€/jour"}</span>
    </div>
    <div class="photographer-tag">
    ${this.photographer.tags
      .map(
        (tag) =>
          `
        <a href="#">
            <span data-filter=${tag}>#${tag}</span> 
        </a>
        `
      )
      .join("")}
    </div>
    `;
  }
}
