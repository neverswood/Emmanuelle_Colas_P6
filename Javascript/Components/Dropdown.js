export default class Dropdown {
  constructor() {
    if (Dropdown.isCreated) {
      throw new Exception("Dropdown already created");
    }
    this.listbox = document.querySelector('[role="listbox"]');
    this.addSelectOptionEventListener();
    this.keydownEvent();
    this.event();
    Dropdown.isCreated = true;
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

  event() {
    const buttonSort = document.querySelector(".btn-sort");
    const listOption = document.querySelector(".listOption");
    buttonSort.addEventListener("click", (e) => {
      console.log(listOption.style.display);
      if (listOption.style.display == "none") {
        listOption.style.display = "block";
      } else if (listOption.style.display === "block") {
        listOption.style.display = "none";
      }
    });
  }
}
