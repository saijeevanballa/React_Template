import { combineReducers } from "redux";

import DashboardReducer from "./dashboard";
import LoaderReducer from "./loader";

export default combineReducers({
  dashBoard: DashboardReducer,
  loader: LoaderReducer,
});
