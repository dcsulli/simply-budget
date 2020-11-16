import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import categoryReducer from "./categoryReducer";
import billsReducer from "./billsReducer";
import purchasesReducer from "./purchasesReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  categories: categoriesReducer,
  bills: billsReducer,
  purchases: purchasesReducer,
  users: usersReducer,
  category: categoryReducer,
});