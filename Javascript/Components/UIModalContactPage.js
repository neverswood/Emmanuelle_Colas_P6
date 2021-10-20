export default class UIModalContactPage {
  constructor() {
    this.form = document.getElementById("sectionForm");
    //this.callEvent();
  }

  addError(label, message) {
    document.getElementById(label).style.border = "2px solid red";
    document.getElementById(`${label}Error`).textContent = message;
  }

  removeError(label) {
    document.getElementById(label).style.border = "none";
    document.getElementById(`${label}Error`).textContent = "";
  }

  callEvent() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("first");
      const lastName = document.getElementById("last");
      const email = document.getElementById("email");
      const emailRegex =
        /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;
      let error = false;

      if (firstName.textContent.length < 2) {
        this.addError("first", "Veuillez entrer 2 caractères minimum");
        error = true;
      } else {
        this.removeError("first");
      }

      if (lastName.textContent.length < 2) {
        this.addError("last", "Veuillez entrer 2 caractères minimum");
        error = true;
      } else {
        this.removeError("last");
      }

      if (!email.textContent.match(emailRegex)) {
        this.addError("email", "Veuillez entrer un email valide");
        error = true;
      } else {
        this.removeError("email");
      }

      if (!error) {
        console.log("modal-name");
        document.getElementById("modal-name").style.display = "none";

        document.getElementById("sectionForm").className = "sectionFormClose";
        document.getElementById("modal-message").style.display = "block";
        document.getElementById("modal-message").innerHTML =
          "Votre message a bien été envoyé !";
      }
    });
  }
}
