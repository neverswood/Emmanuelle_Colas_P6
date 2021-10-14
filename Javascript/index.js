import DataStore from "./Data/DataStore.js";
import UIHomePage from "./Components/UIHomePage.js";
import UINavBarHomePage from "./Components/UINavBarHomePage.js";
import UISetTags from "./Components/UISetTags.js";
import UINavigationBarTags from "./Components/UINavigationBarTags.js";
import UIPhotographerPage from "./Components/UIPhotographerPage.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  console.log(data);

  return new DataStore(data);
}

const main = async () => {
  const dataStore = await getDataStore();
  if (window.location.pathname.includes("/index.html")) {
    const uiHomePage = new UIHomePage(dataStore);
    document.getElementById("photographers").innerHTML = uiHomePage.getHtml();
    /*document.getElementById("header-navbar").innerHTML =
      uiHomePage.getHtmlTags();*/

    const uiNavigationBarTags = new UINavBarHomePage(dataStore);
    document.getElementById("header-navbar-link").innerHTML =
      uiNavigationBarTags.getHtml();
    //const setTags = new UISetTags();
    //const uiSetTags = setTags.displayPage(dataStore);
    ///new UINavigationBarTags().getHtml(uiSetTags);
  } else {
    const uiPhotographerInfos = new UIPhotographerPage(dataStore);
    document.getElementById("presentation-photographer").innerHTML =
      uiPhotographerInfos.getHtml();
  }
};
/*const uiPhotographerInfos = new UIPhotographerInfos(dataStore);
document.getElementById("presentation-photographer").innerHTML =
  uiPhotographerInfos.getHtmlPresentation();*/
console.log("papa", window.location.pathname);

main();
