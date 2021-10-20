import UIModalContact from "./UIModalContact.js";

export default class UIPhotographerInfos {
  constructor(photographer) {
    this.photographer = photographer;
    // this.callEvent();
  }

  getHtml() {
    return `
    
        <div>
        <h1 class="photographer-name">${this.photographer.name}</h1>
        <h2>${(this.photographer.city, this.photographer.country)}</h2>
        <p>${this.photographer.tagline}</p>
        <div class="photographerPage-tag">
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
        </div>
        <button id="open" class="open" type="button">Contactez-moi</button>
        <img  src="/Sample_Photos/Photographers_ID_Photos/${
          this.photographer.portrait
        }" alt="" />
        `;
  }

  callEvent() {
    const modalBtn = document.getElementById("open");
    //const modalBtn = document.querySelectorAll("#open");

    modalBtn.addEventListener("click", () => {
      //console.log("aaa");
      new UIModalContact().modal({ open: true });
    });
  }
}
