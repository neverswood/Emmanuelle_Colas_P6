import DataStore from "./Data/DataStore.js";
import UI from "./Components/UI.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  console.log(data);

  return new DataStore(data);
}

const main = async () => {
  const dataStore = await getDataStore();
  const ui = new UI(dataStore);
  document.getElementById("photographers").innerHTML = ui.getHtml();
};

main();
