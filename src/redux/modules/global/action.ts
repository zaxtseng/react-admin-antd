import { SET_ASSEMBLY_SIZE, SET_LANGUAGE, SET_TOKEN, SET_WEAK_OR_GRAY } from "@/redux/mutation-types";

export const setToken = (token: string) => ({
	type: SET_TOKEN,
	token
});
// * setLanguage
export const setLanguage = (language: string) => ({
	type: SET_LANGUAGE,
	language
});

export const setAssemblySize = (assemblySize: string) => ({
	type: SET_ASSEMBLY_SIZE,
	assemblySize
});

// * setWeakOrGray
export const setWeakOrGray = (weakOrGray: string) => ({
	type: SET_WEAK_OR_GRAY,
	weakOrGray
});
