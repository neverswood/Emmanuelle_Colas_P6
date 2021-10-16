export default class UIModalContactPage {
  constructor(datastore) {}

  LaunchContact() {
    const modalBtn = document.querySelector(".open");

    // Launch modal
    modalBtn.addEventListener("click", launchModal);

    function launchModal() {
      modalbg.style.display = "block";
      bodystyle.style.position = "fixed";
      document.getElementById("sectionForm").className = "sectionFormOpen";
      document.getElementById("modal-name").style.display = "block";
      document.getElementById("modal-message").style.display = "none";
    }

    // Close modal
    function closeModal() {
      modalbg.style.display = "none";
      bodystyle.style.position = "relative";
    }

    close.addEventListener("click", closeModal);
  }
}
