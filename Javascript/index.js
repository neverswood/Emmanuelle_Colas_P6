import DataStore from "./Data/DataStore.js";
import UIHomePage from "./Components/UIHomePage.js";
import UINavBarHomePage from "./Components/UINavBarHomePage.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  console.log(data);

  return new DataStore(data);
}

const main = async () => {
  const dataStore = await getDataStore();
  const uiHomePage = new UIHomePage(dataStore);
  document.getElementById("photographers").innerHTML = uiHomePage.getHtml();
  const uiNavigationBarTags = new UINavBarHomePage(dataStore);
  document.getElementById("header-navbar").innerHTML =
    uiNavigationBarTags.getHtml();
};

main();
