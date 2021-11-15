export default class Gallery {
  constructor(medias) {
    this.medias = medias;
    this.options = document.querySelectorAll(".btn-option");
    this.filterOptions();
  }

  getHtml() {
    return this.medias
      .map((media) => {
        return `
      <div class="box-list-item media" id="item-${media.id}"
      data-id="${media.id}">
      ${media.getHtml()}
      <div class="box-list-presentation">
      <p>${media.title}</p>
      <span class="date">${media.date}</span>
      <span class="price">${media.price}</span>
      <span>${media.likes} <i class="fas fa-heart" class="like"></i></span>
      </div>
      </div>`;
      })
      .join("");
  }

  sortMedias(sort) {
    console.log("sort");
    switch (sort) {
      case "popularity":
        this.medias.sort(function (a, b) {
          if (a.likes < b.likes) {
            return 1;
          } else if (b.likes < a.likes) {
            return -1;
          }
          return 0;
        });
        break;
      case "date":
        this.medias.sort(function (a, b) {
          if (a.date < b.date) {
            return 1;
          } else if (b.date < a.date) {
            return -1;
          }
          return 0;
        });
        break;
      case "title":
        this.medias.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          } else if (b.title < a.title) {
            return 1;
          }
          return 0;
        });
        break;
    }
  }

  deleteSelect(value) {
    console.log("op", this.option);
    console.log("val", value);
    const option = document.querySelectorAll(".option");

    /*this.option.addEventListener("change", function () {
      let selected = this.option.selectedIndex;
      selected.style.display = "none";
    });*/
    //let select = document.getElementById("selectFilter");
    let optionValue = option.getAttribute(value);
    optionValue.setAttribute("selected", "");
    console.log("jo", optionValue);
  }

  filterOptions() {
    this.options.forEach((option) => {
      option.addEventListener("click", () => {
        // Choosing the correct parameter
        if (option.dataset.value === "titre") {
          chosenOption = sortedByTitle;
          setTimeout(1000, openAndCloseDropdown());
        } else if (option.dataset.value === "date") {
          chosenOption = sortedByDate;
          setTimeout(1000, openAndCloseDropdown());
        } else if (option.dataset.value === "popularite") {
          chosenOption = sortedByPopularity;
          setTimeout(1000, openAndCloseDropdown());
        }
      });
    });
  }
}
