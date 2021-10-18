export default class UINavigationBarTags {
  constructor(tags) {
    //
    this.tags = tags;
    this.callEvent();
  }
  getHtml() {
    console.log(this.callEvent());

    return `  
          ${this.tags
            .map(
              (tag) =>
                `
              <a href="#" >
                  <span id="btnTags" data-filter=${tag}>#${tag}</span> 
              </a>
              `
            )
            .join("")}
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
