export default class Dropdown {
  constructor() {
    this.sortOptions = [];
    this.activeOptionArray = [];

    //this.addEvent();
    //this.attachselectedOption();

    this.selectDiv = document.getElementById("select");
    this.optionBtn = document.getElementById("btn-sort");
    this.selectOptions = document.getElementById("select-option");
    this.options = document.querySelectorAll(".btn-option");
    this.btnSortSelected = document.getElementById("btn-sort__selected");
    this.listOption = document.getElementById("listOption");
  }

  openCloseDropdown() {
    console.log("passe aussi");
    const sorting = document.getElementById("sorting");
    const selectArrow = document.getElementById("btn-sort__arrow");

    if (!this.listOption.classList.contains("open")) {
      this.listOption.classList.toggle("open");
      this.optionBtn.setAttribute("aria-expanded", "true");
      selectArrow.animate([{ transform: "rotate(0deg" }], {
        duration: 300,
        fill: "forwards",
      });
    } else {
      selectArrow.animate([{ transform: "rotate(180deg)" }], {
        duration: 300,
        fill: "forwards",
      });

      const close = () => {
        this.listOption.classList.toggle("open");
        this.optionBtn.setAttribute("aria-expanded", "false");
      };

      this.listOption.animate(
        [{ opacity: "0", transform: "translateY(-25px" }],
        360,
        "ease-in-out"
      );
      setTimeout(close, 300);
    }
  }

  addEvent() {
    console.log("kopkop", this.options);

    console.log("event, on passe dedans");
    this.optionBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.openCloseDropdown();
    });

    // Close dropdown on click in window
    window.addEventListener("click", (e) => {
      if (
        this.listOption.classList.contains("open") &&
        !this.selectOptions.contains(e.target)
      ) {
        this.openCloseDropdown();
      }
    });
  }

  attachselectedOption() {
    console.log("passe");
    const btnSortSelected = document.getElementById("btn-sort__selected");

    this.options.forEach((option) => {
      if (option.getAttribute("aria-selected") === "true") {
        btnSortSelected.innerText = option.innerText;
        option.classList.add("hidden");
      }

      option.addEventListener("click", (e) => {
        e.preventDefault();
        const btnLastSortSelected = document.querySelector(".select > .hidden");

        // Unselected last selected element
        btnLastSortSelected.setAttribute("aria-selected", "false");
        btnLastSortSelected.classList.remove("hidden");

        // Clicked element becomes new selected element
        option.classList.add("hidden");
        option.setAttribute("aria-selected", "true");
        btnSortSelected.innerText = option.innerText;
      });
    });
  }

  filterByOption(element) {
    console.log("passe aussi 2");
    // element.blur();

    // Toggling 'active-option' and updating active tags array
    if (element.classList.contains("active-option")) {
      element.classList.remove("active-option");
      this.activeOptionArray = this.activeOptionArray.filter(
        (option) => !(option === element.dataset.tagName)
      );
    } else {
      element.classList.add("active-option");
      this.activeOptionArray.push(element.dataset.tagName);
    }

    /*const mediaContainer = document.querySelectorAll(".media__container");
    // If no tags are active, all is displayed
    if (this.activeOptionArray.length <= 0) {
      mediaContainer.forEach((elementToDisplay) => {
        elementToDisplay.classList.remove("hidden");
      });
      return;
    }*/

    // Media are hidden, only to be shown when a relevant tag has been selected
    mediaContainer.forEach((media) => {
      media.classList.add("hidden");
    });

    // If a tag has a sister tag in the active array, his parent is displayed
    activeOptionArray.forEach((tag) => {
      const elementsToDisplay = document.querySelectorAll(
        `div[data-tag-name="${tag}"]`
      );
      elementsToDisplay.forEach((elementToDisplay) => {
        elementToDisplay.classList.remove("hidden");
        elementToDisplay.animate(
          [{ opacity: "0" }, { opacity: "1" }],
          400,
          "ease-in-out",
          "forwards"
        );
      });
    });
  }
}
