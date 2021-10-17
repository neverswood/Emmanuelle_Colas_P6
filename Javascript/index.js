import DataStore from "./Data/DataStore.js";
import UIHomePage from "./Components/UIHomePage.js";
import UINavBarHomePage from "./Components/UINavBarHomePage.js";
import UIPhotographerPage from "./Components/UIPhotographerPage.js";
//import UIModalContactPage from "./Components/UIModalContactPage.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  console.log(data);

  return new DataStore(data);
}

const main = async () => {
  const dataStore = await getDataStore();
  if (window.location.pathname.includes("/photographer.html")) {
    const uiPhotographerInfos = new UIPhotographerPage(dataStore);
    document.getElementById("presentation-photographer").innerHTML =
      uiPhotographerInfos.getHtml();
  } else {
    const uiHomePage = new UIHomePage(dataStore);
    document.getElementById("photographers").innerHTML = uiHomePage.getHtml();
    /*document.getElementById("header-navbar").innerHTML =
      uiHomePage.getHtmlTags();*/

    const uiNavigationBarTags = new UINavBarHomePage(dataStore);
    document.getElementById("header-navbar-link").innerHTML =
      uiNavigationBarTags.getHtml();

    /*const uiModalContact = new UIModalContactPage(dataStore);
    document.getElementById("modal-body").innerHTML =
      uiModalContact.LaunchContact();*/
  }
};

console.log("papa", window.location.pathname);

main();
