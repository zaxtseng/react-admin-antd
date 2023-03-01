import { message } from "antd";
import { useEffect, useState } from "react";
import screenfull from "screenfull";

const Fullscreen = () => {
	const [fullScreen, setFullScreen] = useState<boolean>(screenfull.isFullscreen);

	useEffect(() => {
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) setFullScreen(true);
			else setFullScreen(false);
			return () => screenfull.off("change", () => {});
		});
	}, []);

	const handleFullscreen = () => {
		if (!screenfull.isEnabled) message.warning("当前浏览器不支持全屏");
		screenfull.toggle();
	};

	return (
		<i className={["icon-style iconfont", fullScreen ? "icon-suoxiao" : "icon-fangda"].join(" ")} onClick={handleFullscreen}></i>
	);
};
export default Fullscreen;
