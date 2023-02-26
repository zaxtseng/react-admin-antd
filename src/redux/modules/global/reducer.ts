import { GlobalState } from "@/redux/interface";
import { SET_TOKEN } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "",
	language: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: false
	}
};

const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_TOKEN:
				draft.token = action.token;
				break;

			default:
				return draft;
		}
	});

export default global;
