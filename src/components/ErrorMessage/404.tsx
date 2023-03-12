import { Button, Result } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import "./index.less";

const NotFound: FC = () => {
	const navigate = useNavigate();
	const goHome = () => navigate("/home/index");

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist"
			extra={
				<Button type="primary" onClick={goHome}>
					Back Home
				</Button>
			}
		/>
	);
};

export default NotFound;
