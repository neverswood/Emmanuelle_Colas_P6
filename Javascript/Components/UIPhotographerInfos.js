import FormContact from "./FormContact.js";

export default class UIPhotographerInfos {
  constructor(photographer) {
    this.photographer = photographer;
    // this.callEvent();
  }

  getHtml() {
    console.log("ttt", this.photographer.name);
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

  /*getHtml2() {
    console.log("rrrr", this.photographer.name);
    return `
    <div id="modal-name">
    <p>Contactez-moi</p>
    <span>${this.photographer.name}</span>
    </div>
    `;
  }*/

  callEvent() {
    const modalBtn = document.getElementById("open");
    //const modalBtn = document.querySelectorAll("#open");

    modalBtn.addEventListener("click", () => {
      //console.log("aaa");
      new FormContact().modal({ open: true });
    });
  }
}
