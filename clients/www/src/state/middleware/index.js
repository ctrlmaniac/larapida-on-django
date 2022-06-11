import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import loggerMiddleware from "./logger";

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(loggerMiddleware);
}

export default applyMiddleware(...middlewares);
