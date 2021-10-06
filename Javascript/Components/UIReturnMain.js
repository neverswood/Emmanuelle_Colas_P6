const returnMain = document.getElementById("return-main");
let home = document.getElementById("home");

/// launch div return-main
function launchReturnMain() {
  returnMain.style.display = "block";
}

home.addEventListener("wheel", launchReturnMain);
returnMain.addEventListener("click", home);
