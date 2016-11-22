import { createStore, combineReducers } from "redux";

import nav from "./reducers/nav";

const reducer = combineReducers({
  nav
});

export default createStore(reducer);
