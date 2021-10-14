export default class UIFilterTags {
  constructor(photographer) {
    //
    this.photographer = photographer; //
  }

  getHtml1() {
    console.log("miam", this.photographer.tags);
    return ` 
    <a href="#" id="header-navbar-link">
    <span class="span-hidden">
    <span class="tag" data-tag-name=${this.photographer.tags}>#${this.photographer.tags} </span>
    </span>
    </a>
    `;
  }
}
