import { Card } from "@/comps/Card";
import { Flex } from "@/comps/Flex";
import { Form } from "@/comps/Form";
import { Input } from "@/comps/Input";
import { Password } from "@/comps/Password";
import { useSignal } from "@/utils";

export default function App() {
  const text = useSignal("");

  return (
    <>
      <Card>
        <Card.Title>水平表单</Card.Title>
        <Form>
          <Form.Item label="123">
            <Input placeholder="文本类型" value={text} />
          </Form.Item>
          <Form.Item label="123">
            <Input placeholder="密码类型" type="password" value={text} />
          </Form.Item>
          <Form.Item label="123" isRequired>
            <Input value={text} disabled placeholder="禁用状态" />
          </Form.Item>
          <Form.Item label="123">
            <Input value={text} readonly placeholder={"只读状态"} />
          </Form.Item>
          <Form.Item label="1jkljl23">
            <Password placeholder="密码组件" value={text} />
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Card.Title>水平表单 - 右对齐</Card.Title>
        <Form>
          <Form.Item label="123" labelClass="text-right">
            <Input placeholder="文本类型" value={text} />
          </Form.Item>
          <Form.Item label="123" labelClass="text-right">
            <Input placeholder="密码类型" type="password" value={text} />
          </Form.Item>
          <Form.Item label="123" isRequired labelClass="text-right">
            <Input value={text} disabled placeholder="禁用状态" />
          </Form.Item>
          <Form.Item label="123" labelClass="text-right">
            <Input value={text} readonly placeholder={"只读状态"} />
          </Form.Item>
          <Form.Item label="1jkljl23" labelClass="text-right">
            <Password placeholder="密码组件" value={text} />
          </Form.Item>
        </Form>
      </Card>

      <Card>
        <Card.Title>垂直表单</Card.Title>
        <Form>
          <Form.ItemVertical label="123" isRequired>
            <Input placeholder="文本类型" value={text} />
          </Form.ItemVertical>
          <Form.ItemVertical label="123">
            <Input placeholder="密码类型" type="password" value={text} />
          </Form.ItemVertical>
          <Form.ItemVertical label="123">
            <Input value={text} disabled placeholder="禁用状态" />
          </Form.ItemVertical>
          <Form.ItemVertical label="123">
            <Input value={text} readonly placeholder={"只读状态"} />
          </Form.ItemVertical>
          <Form.ItemVertical label="1jkljl23">
            <Password placeholder="密码组件" value={text} />
          </Form.ItemVertical>
        </Form>
      </Card>
    </>
  );
}
