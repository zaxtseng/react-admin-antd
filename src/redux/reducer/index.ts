import { combineReducers } from "redux";
import auth from "../modules/auth/reducer";
import global from "../modules/global/reducer";
import menu from "../modules/menu/reducer";
import tabs from "../modules/tabs/reducer";

const rootReducer = combineReducers({
	menu,
	auth,
	tabs,
	global
});

export default rootReducer;
