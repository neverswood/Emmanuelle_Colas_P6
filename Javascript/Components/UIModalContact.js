export default class UIModalContact {
  constructor() {
    this.modalbg = document.getElementById("bground");
    this.bodystyle = document.querySelector("body");
  }

  modal({ open }) {
    console.log("modalbg", this.modalbg);
    console.log("bodystyle", this.bodystyle);
    if (open) {
      this.launchModal();
      // this.eventBtn();
    } else {
      this.closeModal();
    }
  }

  launchModal() {
    this.modalbg.style.display = "block";
    this.bodystyle.style.position = "fixed";
    document.getElementById("sectionForm").className = "sectionFormOpen";
    document.getElementById("modal-name").style.display = "block";
    document.getElementById("modal-message").style.display = "none";
  }

  closeModal() {
    document.body.classList.remove("open");
    this.modalbg.style.display = "none";
    bodystyle.style.position = "relative";
  }
  /*
  eventBtn() {
    const modalClose = document.querySelectorAll(".close");
    modalClose.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.modal({ open: false });
      });
    });
  }*/
}
