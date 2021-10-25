import Galery from "./Galery.js";

export default class Dropdown {
  constructor(data) {
    this.callEvents(data);
  }

  callEvents(data) {
    const selectedFilter = document.getElementById("selectFilter");
    selectedFilter.addEventListener("change", () => {
      Option.style.display = "none";
    });
  }

  sortData(sort, data) {
    let newMedia;
    const media = data.media;
    switch (sort) {
      case 1:
        newMedia = media.sort(function (a, b) {
          return b.likes - a.likes;
        });
        break;
      case 2:
        newMedia = media.sort(function (x, y) {
          return y.date - x.date;
        });
        break;
      case 3:
        newMedia = media.sort(function (x, y) {
          return y.title - x.title;
        });
        break;
      default:
        newMedia = media;
        break;
    }
    this.displayMedia(newMedia);
  }
  displayMedia(media) {
    this.remove();
    new Galery().create(media);
  }
  remove() {
    const portfolioDomItem = document.querySelectorAll(".portfolio-item");
    portfolioDomItem.forEach((element) => {
      element.remove();
    });
  }
}
