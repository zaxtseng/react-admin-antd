import "react-router-dom";
import { MetaProps } from "./routers/interface/index";

declare module "react-router-dom" {
	export interface NonIndexRouteObject {
		meta?: MetaProps;
	}
	export interface IndexRouteObject {
		meta?: MetaProps;
	}
}
