export default class Photographer {
  constructor(name, id, city, country, tags, tagline, price, portrait) {
    this.name = name;
    this.id = id;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;
  }

  getHtml() {
    return `
    <a href="/photographer.html?id=${photographer.id}">
        <img src="/Sample_Photos/Photographers_ID_Photos/${
          this.portrait
        }" alt=""/>
        <h2>${this.name}</h2>
        </a>
        <div class="photographer_presentation">
        <h3>${this.city + " , " + " " + this.country}</h3>
        <p>${this.tagline}</p>
        <span>${this.price + "€/jour"}</span>
        </div>
        <div class="photographer-tag">
        ${this.tags
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

const photographer = new Photographer(data);
document.getElementById("photographers").innerHTML = photographer.getHTML();
