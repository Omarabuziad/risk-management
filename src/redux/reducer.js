import { combineReducers } from "redux";
import orderReducer from "./order";
import CustRiskReducer from "./CustRisk";
import scoreReducer from "./scoresGrid";



export default combineReducers({
  orders: orderReducer,
  customerResult : CustRiskReducer , 
  scores : scoreReducer
});
