import UINavBarHomePage from "./UINavBarHomePage.js";

export default class UISetTags {
  displayPage(data) {
    let tags = new Set();
    data.photographers.forEach((photographer) => {
      photographer.tags.forEach((tag) => {
        tags.add(tag);
      });
    });
  }
}
