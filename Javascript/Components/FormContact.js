export default class FormContact {
  constructor(photographer) {
    this.modalbg = document.getElementById("bground");
    this.sectionForm = document.getElementById("sectionForm");
    this.photographer = photographer;

    //this.bodystyle = document.querySelector("body");
  }

  getHtml() {
    console.log("rrrr", this.photographer.name);
    return `
    <div id="modal-name">
    <p>Contactez-moi</p>
    <span>${this.photographer.name}</span>
    </div>
    `;
  }

  modal({ open }) {
    if (open) {
      this.launchModal();
      this.eventBtn();
    } else {
      this.closeModal();
    }
  }

  launchModal() {
    //const modalName = document.getElementById("modal-name");
    this.modalbg.style.display = "block";
    //this.bodystyle.style.position = "fixed";
    this.sectionForm.className = "sectionFormOpen";
    //this.sectionForm.style.display = "block";

    //modalName.style.display = "block";
    document.getElementById("modal-message").style.display = "none";
  }

  closeModal() {
    document.body.classList.remove("open");
    this.modalbg.style.display = "none";
    bodystyle.style.position = "relative";
  }

  eventBtn() {
    const modalClose = document.querySelectorAll(".close");
    modalClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.modal({ open: false });
      });
    });
  }
}
