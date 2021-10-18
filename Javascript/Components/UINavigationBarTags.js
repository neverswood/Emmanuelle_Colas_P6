export default class UINavigationBarTags {
  constructor(dataStore) {
    //
    this.photographers = dataStore.photographers;
    this.callEvent();
  }

  callEvent() {
    const tags = document.querySelectorAll("#btnTags");
    tags.forEach((tag) => {
      const filterName = tag.getAttribute("data-filter");
      tag.addEventListener("click", () => this.filter(filterName));
    });
  }

  filter(tag) {
    console.log("photo", this.photographers);
    this.photographers.map((photographer) => {
      const photographerElement = document.getElementById(photographer.id);
      console.log("jio", photographer, tag);
      const isFiltered = photographer.tags.includes(tag.toLowerCase());

      if (!isFiltered) {
        photographerElement.style.display = "none";
      } else {
        photographerElement.style.display = "block";
      }
    });
  }
}
