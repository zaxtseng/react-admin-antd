import { SET_TOKEN } from "@/redux/mutation-types";

export const setToken = (token: string) => ({
	type: SET_TOKEN,
	token
});
