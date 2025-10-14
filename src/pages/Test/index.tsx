import { Form } from "@/comps/Form";
import { Input } from "@/comps/Input";
import { Svg } from "@/comps/Svg";
// import { wrapper, type Children } from "@/utils";

export default function App() {
  return (
    <div>
      <Svg.Clear />
      {/* <Form>
        <Form.Item label="测试闭包">{wrapper(Input, { value: "123" })()}</Form.Item>
      </Form> */}
    </div>
  );
}
