import { createStore, combineReducers, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import buyer from "./reducers/buyer";
import fit from "./reducers/fit";
import nav from "./reducers/nav";

const reducer = combineReducers({
  buyer,
  fit,
  nav
});

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);
