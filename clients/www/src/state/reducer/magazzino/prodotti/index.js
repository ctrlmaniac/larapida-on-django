import { combineReducers } from "redux";
import lista from "./lista";
import dettagli from "./dettagli";

// RootReducer
export default combineReducers({
  lista: lista,
  dettagli: dettagli,
});
