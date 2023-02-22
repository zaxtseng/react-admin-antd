import { Spin } from "antd";
import "./index.less";

const Loading = ({ tip = "Loading…" }: { tip?: string }) => {
	return <Spin tip={tip} size="large" className="request-loading" />;
};

export default Loading;
