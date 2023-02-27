import { SET_LANGUAGE, SET_TOKEN } from "@/redux/mutation-types";

export const setToken = (token: string) => ({
	type: SET_TOKEN,
	token
});
// * setLanguage
export const setLanguage = (language: string) => ({
	type: SET_LANGUAGE,
	language
});
