import DataStore from "./Data/DataStore.js";
import UIHomePage from "./Components/UIHomePage.js";
import UIPhotographerPage from "./Components/UIPhotographerPage.js";
import UINavigationBarTags from "./Components/UINavigationBarTags.js";
import UIPhotographerInfos from "./Components/UIPhotographerInfos.js";
import UIModalContact from "./Components/UIModalContact.js";
import FormContact from "./Components/FormContact.js";
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
    const uiPhotographerPage = new UIPhotographerPage(dataStore);
    uiPhotographerPage.draw();

    // new FormContact().callEvent();
  } else {
    const uiHomePage = new UIHomePage(dataStore);
    document.getElementById("photographers").innerHTML = uiHomePage.getHtml();
    /*document.getElementById("header-navbar").innerHTML =
      uiHomePage.getHtmlTags();*/

    new UINavigationBarTags(dataStore);

    /*const uiModalContact = new UIModalContactPage(dataStore);
    document.getElementById("modal-body").innerHTML =
      uiModalContact.LaunchContact();*/
  }
};

main();
