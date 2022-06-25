import { combineReducers } from "redux";
import categorie from "./categorie";
import prodotti from "./prodotti";

export default combineReducers({
  categorie: categorie,
  prodotti: prodotti,
});
