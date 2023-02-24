import { getAuthorButtons } from "@/api/modules/login";
import { Button } from "antd";

const dataScreen = () => {
	const requestMenuList = async () => {
		// const res = await getMenuList();
		const res = await getAuthorButtons();
		console.log(res);
	};
	return (
		<Button type="primary" onClick={requestMenuList}>
			发起网络请求
		</Button>
	);
};

export default dataScreen;
