import { Card } from "@/comps/Card";
import { Flex } from "@/comps/Flex";
import { Form } from "@/comps/Form";
import { Input } from "@/comps/Input";

export default function App() {
  return (
    <div class="p-6">
      <Card>
        <Card.Title>数字输入</Card.Title>
        <Form>
          <Form.ItemVertical label="最小值为0，最大值为10，精度为0，自动计算步长为1">
            <Input.Number min={0} max={10} precision={0} />
          </Form.ItemVertical>
          <Form.ItemVertical label="精度为1，自动计算步长为0.1">
            <Input.Number precision={1} />
          </Form.ItemVertical>
          <Form.ItemVertical label="精度为1，步长为1">
            <Input.Number precision={1} step={1} />
          </Form.ItemVertical>
          <Form.ItemVertical label="精度为4，步长为0.1">
            <Input.Number precision={4} step={0.1} />
          </Form.ItemVertical>

          <Form.ItemVertical label="禁用状态">
            <Input.Number precision={4} step={0.1} disabled />
          </Form.ItemVertical>

          <Form.ItemVertical label="只读状态">
            <Input.Number readonly precision={4} step={0.1} />
          </Form.ItemVertical>

          <Form.ItemVertical label="无控制按钮">
            <Input.Number controls={false} />
          </Form.ItemVertical>
        </Form>
      </Card>
    </div>
  );
}
