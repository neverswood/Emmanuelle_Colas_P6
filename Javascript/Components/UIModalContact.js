export default class UIModalContact {
  constructor(dataStore) {
    this.photographer = dataStore.photographer;
    this.callEvent();
  }

  getHtml() {
    return `
        <div id="modal-name">Contactez-moi ${this.photographer.name}</div>
        `;
  }

  callEvent() {
    const tags = document.querySelectorAll("btnTags");
    tags.forEach((tag) =>
      tag.addEventListener("click", () => this.filter(tag.id))
    );
  }

  filter(tag) {
    this.photographer.map((photographer) => {
      const photographers = document.getElementById(photographers.id);
      const isFiltered = photographer.tags.includes(tag.toLowerCase());

      if (!isFiltered) {
        photographer.style.display = "none";
      } else {
        photographer.style.display = "block";
      }
    });
  }
}
