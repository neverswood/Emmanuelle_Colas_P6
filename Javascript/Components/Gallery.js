export default class Gallery {
  constructor(medias) {
    /* if (Gallery.isCreated) {
      throw new Exception("Gallery already created");
    }*/
    this.medias = medias;
    this.options = document.querySelectorAll(".btn-option");
    //this.filterOptions();
    //this.incrementLike();

    //Gallery.isCreated = true;
  }

  getHtml() {
    return this.medias
      .map((media) => {
        return `
      <div class="box-list-item media" id="item-${media.id}"
      data-id="${media.id}">
      ${media.getHtml()}
      <div class="box-list-presentation">
      <div class="box-list-presentation__titleDate">
      <p>${media.title}</p>
      <span class="date">${media.date}</span>
      </div>
      <div class="box-list-presentation__priceLike">
      <span class="price">${media.price}€</span>
      <span class="ilike">${
        media.likes
      } <i class="fas fa-heart likeHeart"  id="like"></i></span>
      </div>
      </div>
      </div>`;
      })
      .join("");
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

  /*filterOptions() {
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
  }*/

  incrementLike(data) {
    console.log(this.photographerPage);

    console.log(this.photographerMedia);
    this.photographerMedia.forEach(() => {
      const mediumLikes = this.medias.likes;
      const likeElement = null;
    });
    mediumLikes++;
    likeElement;
    sumLike++;
    //mediumLikes++;
    console.log(this.sumLike);
    document.getElementById(
      "like"
    ).innerHTML = `${mediumLikes} <i class="fas fa-heart" class="like"></i>`;
    //photographerPageDivLike.innerHTML = `${sumLike} <i class="fas fa-heart"></i>`;
  }
}
