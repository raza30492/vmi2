import { createStore, combineReducers, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import nav from "./reducers/nav";
import fit from "./reducers/fit";

const reducer = combineReducers({
  nav,
  fit
});

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, middleware);
