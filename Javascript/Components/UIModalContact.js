export default class UIModalContact {
  constructor(dataStore) {
    this.photographer = dataStore.photographer;
  }

  getHtml() {
    return `
        <div id="modal-name">Contactez-moi ${this.photographer.name}</div>
        `;
  }
}
