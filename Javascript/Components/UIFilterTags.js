/*export default class UIFilterTags {
  constructor(photographer) {
    //
    this.photographer = photographer; //
    this.callEvent();
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
*/
