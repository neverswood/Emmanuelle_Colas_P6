export default class UINavigationBarTags {
  constructor(photographer) {
    //
    this.photographer = photographer;
  }

  getHtml() {
    return `    
          <a href="#" id="header-navbar-link">
          <span class="span-hidden">
          <span class="tag" data-tag-name=${this.photographer.tags}>#${this.photographer.tags} </span>
          </span>
          </a>
          `;
  }
}
