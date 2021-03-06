import { combineReducers, createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import orders from "../reducers/orders";
import menus from "../reducers/menus";
import transactions from "../reducers/transactions";
import time from "../reducers/time";

const reducers = combineReducers({
  orders: orders,
  menus: menus,
  transactions,
  time
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
