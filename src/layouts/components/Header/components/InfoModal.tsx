import { message, Modal } from "antd";
import { Ref, useImperativeHandle, useState } from "react";

interface Props {
	innerRef: Ref<{ showModal: (params: any) => void } | undefined>;
}

const InfoModal = (props: Props) => {
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	useImperativeHandle(props.innerRef, () => ({ showModal }));
	const showModal = (params: { name?: number }) => {
		setModalVisible(true);
		console.log(params);
	};

	const handleOk = () => {
		setModalVisible(false);
		message.success("修改用户信息成功");
	};

	const handleCancel = () => {
		setModalVisible(false);
	};

	return (
		<Modal title="个人信息" open={modalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
			<p>User Info...</p>
			<p>User Info...</p>
			<p>User Info...</p>
		</Modal>
	);
};

export default InfoModal;
