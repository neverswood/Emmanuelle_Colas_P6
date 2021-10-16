export default class UINavigationBarTags {
  constructor(tags) {
    //
    this.tags = tags;
  }

  getHtml() {
    console.log("rorororo", this.tags);
    return `  
          <span class="span-hidden">
          ${this.tags
            .map(
              (tag) =>
                `
              <a href="#" id="btnTags">
                  <span data-filter=${tag}>#${tag}</span> 
              </a>
              `
            )
            .join("")}
          </span>
          `;
  }
}
//<span class="tag" data-tag-name=${this.photographer.tags}>#${this.photographer.tags} </span>
