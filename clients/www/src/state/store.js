import { createStore, compose } from "redux";
import rootReducer from "./reducer";
import middleware from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(middleware)(createStore)(rootReducer);
