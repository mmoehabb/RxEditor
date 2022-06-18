import DataManager from "../DataManager/Classes/Model";
import { showError } from "../features/Alert/Alert";

const loadFromHeader = (dataManager: DataManager, param: string) => {
  const params = new URL(window.location.href).searchParams;

  if (params.get(param)) {
    fetch(params.get(param) as string)
    .then((res) => res.json())
    .then((data) => dataManager.loadDataFromJSON(data))
    .catch((e) => {
        console.log(e)
        showError("Can't download the file.")
    });
  }
}

export default loadFromHeader;