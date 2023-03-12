import { AuthState } from "@/redux/interface";
import { SET_AUTH_BUTTONS, SET_AUTH_ROUTER } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";

const authState: AuthState = {
	authButtons: {},
	authRouter: []
};

const auth = (state: AuthState = authState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_AUTH_BUTTONS:
				draft.authButtons = action.authButtons;
				break;
			case SET_AUTH_ROUTER:
				draft.authRouter = action.authRouter;
				break;
			default:
				return draft;
		}
	});

export default auth;
