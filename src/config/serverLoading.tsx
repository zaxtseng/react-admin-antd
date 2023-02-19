/**
 * 全局loading
 */

import Loading from "@/components/Loading";
import ReactDOM from "react-dom/client";

let needLoadingRequestCount = 0;
export const showFullScreenLoading = () => {
	if (needLoadingRequestCount === 0) {
		let dom = document.createElement("div");
		dom.setAttribute("id", "loading");
		document.body.appendChild(dom);
		ReactDOM.createRoot(dom).render(<Loading />);
	}
	needLoadingRequestCount++;
};

// 隐藏loading
export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		document.body.removeChild(document.getElementById("loading") as HTMLElement);
	}
};
