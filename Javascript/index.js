import DataStore from "./DataStore.js";

async function getDataStore() {
  const response = await fetch("../api/FishEyeData.json");
  const data = await response.json();
  return new DataStore(data);
}
const data = await getDataStore();
