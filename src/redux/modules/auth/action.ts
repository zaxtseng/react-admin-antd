import { SET_AUTH_BUTTONS, SET_AUTH_ROUTER } from "@/redux/mutation-types";

export const setAuthButtons = (authButtons: { [key: string]: any }) => ({
	type: SET_AUTH_BUTTONS,
	authButtons
});

export const setAuthRouter = (authRouter: string[]) => ({
	type: SET_AUTH_ROUTER,
	authRouter
});
