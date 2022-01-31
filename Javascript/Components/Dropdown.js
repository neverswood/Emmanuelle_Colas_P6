import Gallery from "./Gallery.js";
import UIPhotographerPage from "./UIPhotographerPage.js";

export default class Dropdown {
  constructor(medias, uiPhotographerPage) {
    /*if (Dropdown.isCreated) {
      throw new Exception("Dropdown already created");
    }*/

    this.uiPhotographerPage = uiPhotographerPage;
    this.medias = medias;
    this.listbox = document.querySelector('[role="listbox"]');
    this.addSelectOptionEventListener();
    this.keydownEvent();
    this.event();
    //Dropdown.isCreated = true;
    //this.openDropdown();
    //this.closeDropown();
    this.dropdownIsClosed = true;
  }

  addSelectOptionEventListener() {
    console.log("popopo");
    const characters = [...this.listbox.children];

    this.listbox.addEventListener("click", (event) => {
      const option = event.target.closest("li");
      if (!option) return;
      this.listbox.setAttribute("aria-activedescendant", option.id);
      characters.forEach((element) => element.classList.remove("is-selected"));
      option.classList.add("is-selected");
    });
  }

  keydownEvent() {
    console.log("lopipop");
    const characters = [...this.listbox.children];

    this.listbox.addEventListener("keydown", (event) => {
      const { key } = event;
      if (key !== "ArrowDown" && key !== "ArrowUp") return;

      const activeElementID = this.listbox.getAttribute(
        "aria-activedescendant"
      );
      const activeElement = this.listbox.querySelector("#" + activeElementID);

      let selectedOption;
      if (key === "ArrowDown")
        selectedOption = activeElement.nextElementSibling;
      if (key === "ArrowUp") selectedOption = activeElement.previousSibling;

      if (selectedOption) {
        this.listbox.setAttribute("aria-activedescendant", selectedOption.id);
        characters.forEach((element) =>
          element.classList.remove("is-selected")
        );
        selectedOption.classList.add("is-selected");
      }
    });
  }

  event(sort) {
    const buttonSort = document.querySelector(".btn-sort");
    const listOption = document.querySelector(".listOption");
    const btnOption = document.querySelectorAll(".btn-option");
    const chevron = document.querySelector(".fa-chevron-down");

    buttonSort.addEventListener("click", (e) => {
      if (listOption.style.display == "none") {
        listOption.style.display = "block";
        document.querySelector(".fa-chevron-up").style.display = "none";
        document.querySelector(".fa-chevron-down").style.display = "block";
      } else if (listOption.style.display === "block") {
        listOption.style.display = "none";
        document.querySelector(".fa-chevron-up").style.display = "block";
        document.querySelector(".fa-chevron-down").style.display = "none";
      }
    });
    // listOption.map(() => {
    /*listOption.addEventListener("change", (select) => {
      this.sortMedias(select.target.value);
    });*/

    listOption.addEventListener("click", (e) => {
      this.sortMedias(e.target.dataset.value);
      this.uiPhotographerPage.drawGallery();
      console.log("targ", e.target);
    });

    window.addEventListener("click", (e) => {
      if (!e.target.matches("#select-option *")) {
        listOption.style.display = "none";
      }
    });
    // });
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
}

////////////////ouvrir fermer dropdown
/*
var dropdownUtensilsIsClosed = true;

function dropdownUtensils(utens) {
  const dropdownUtensils = document.getElementById("dropdownUtensils");
  const listBox = document.getElementById("listbox-utensils");
  dropdownUtensils.addEventListener("click", (e) => {
    if (dropdownUtensilsIsClosed) {
      dropdownUtensilsIsClosed = false;
      const utensils = [...new Set(getUtensils())];
      document.getElementById("search-utensils").style.display = "block";
      document.getElementById("listbox-nameUtensils").style.display = "none";
      dropdownUtensils.classList.add("utensilsOpen");
      listBox.innerHTML = `<ul>${getItemUtensil(utensils)}</ul>`;
    } else {
      dropdownUtensilsIsClosed = true;
      document.getElementById("search-utensils").style.display = "none";
      document.getElementById("listbox-nameUtensils").style.display = "block";
      dropdownUtensils.classList.remove("utensilsOpen");
      listBox.innerHTML = "";
    }
  });
}*/
