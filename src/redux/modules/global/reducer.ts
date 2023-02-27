import { GlobalState } from "@/redux/interface";
import { SET_ASSEMBLY_SIZE, SET_LANGUAGE, SET_TOKEN } from "@/redux/mutation-types";
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
			case SET_ASSEMBLY_SIZE:
				draft.assemblySize = action.assemblySize;
				break;
			case SET_LANGUAGE:
				draft.language = action.language;
				break;
			default:
				return draft;
		}
	});

export default global;
