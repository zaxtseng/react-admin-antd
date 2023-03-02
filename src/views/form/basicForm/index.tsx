import { Button, Form, Input, message, Select, Space } from "antd";

const BasicForm = () => {
	const { Option } = Select;
	const [form] = Form.useForm();

	const onGenderChange = (value: string) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: "Hi, man!" });
				return;
			case "female":
				form.setFieldsValue({ note: "Hi, lady!" });
		}
	};
	const onFinish = (values: any) => {
		message.success("提交的数据为 : " + JSON.stringify(values));
		console.log(JSON.stringify(values));
	};
	const onReset = () => {
		form.resetFields();
	};
	const onFill = () => {
		form.setFieldsValue({
			user: "mark",
			note: "Hello world!",
			gender: "male"
		});
	};

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish} labelCol={{ span: 1 }}>
			<Form.Item name="user" label="User">
				<Input placeholder="user" />
			</Form.Item>
			<Form.Item name="note" label="Note">
				<Input placeholder="user note" />
			</Form.Item>
			<Form.Item name="gender" label="Gender">
				<Select placeholder="options" onChange={onGenderChange} allowClear>
					<Option value="male">male</Option>
					<Option value="female">female</Option>
				</Select>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 1 }}>
				<Space>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
					<Button type="primary" htmlType="button" onClick={onReset}>
						Reset
					</Button>
					<Button type="link" htmlType="button" onClick={onFill}>
						Fill Form
					</Button>
				</Space>
			</Form.Item>
		</Form>
	);
};

export default BasicForm;
