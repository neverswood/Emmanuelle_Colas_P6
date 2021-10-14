export default class UINavigationBarTags {
  constructor(photographer) {
    //
    this.tags = tags;
  }

  getHtml() {
    console.log("rorororo", this.photographer.tags);
    return `  
          <div class="span-hidden">
          ${this.tags
            .map(
              (tag) =>
                `
              <a href="#">
                  <span data-filter=${tag}>#${tag}</span> 
              </a>
              `
            )
            .join("")}
          </div>
          `;
  }
}
//<span class="tag" data-tag-name=${this.photographer.tags}>#${this.photographer.tags} </span>
