import Photographer from "../Data/Photographer.js";

export default class UIPhotographerItem extends Photographer {
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    super(name, id, city, country, tags, tagline, price, portrait);
  }

  getHTML() {
    /*return `<p>lol</p>`;*/
    return `
    <a href="/photographer.html?id=${this.id}">
    <img src="/Sample_Photos/Photographers_ID_Photos/${this.portrait}" alt=""/>
    <h2>${this.name}</h2>
    </a>
    <div class="photographer_presentation">
    <h3>${this.city + " , " + " " + this.country}</h3>
    <p>${this.tagline}</p>
    <span>${this.price + "€/jour"}</span>
    </div>

    `;
  }
}
