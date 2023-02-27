import { RootState } from "@/redux";
import { updateCollapse } from "@/redux/modules/menu/action";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const CollapseIcon = () => {
	const dispatch = useDispatch();
	const { isCollapse } = useSelector((state: RootState) => state.menu);

	return (
		<div className="collapsed" onClick={() => dispatch(updateCollapse(!isCollapse))}>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
		</div>
	);
};

export default CollapseIcon;
