export default class UIModalContact {
  constructor(photographer) {
    this.photographer = photographer;
  }

  getHtml() {
    return `
        <div id="modal-name">Contactez-moi ${this.photographer.name}</div>
        `;
  }
}
