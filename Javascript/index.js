import DataStore from "./Data/DataStore.js";
import UIPhotographerItem from "./Components/UIPhotographerItem.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  return new DataStore(data);
}
const data = await getDataStore();

const main = async () => {
  const ui = new UIPhotographerItem();
  document.getElementById("photographers").innerHTML = ui.getHTML();
};

main();
