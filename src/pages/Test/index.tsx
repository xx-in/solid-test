import { Button } from "@/comps/Button";
import { Title } from "@/comps/Title";
import { useSignal } from "@/utils";

export default function Page() {
  const count = useSignal([[1]]);

  function addOne() {
    count.update(cur => {
      cur[0][0] += 1;
    });
  }

  function subOne() {
    count.update(cur => {
      cur[0][0] -= 1;
    });
  }

  const double = useSignal(() => {
    return count.get()[0][0] * 2;
  });

  return (
    <div>
      <h1>test</h1>
      <Title>Test</Title>
      <a href="/">Home</a>
      <div class="flex items-center justify-between p-2">
        <Button onclick={addOne} class={Button.blue}>
          +1
        </Button>
        <Button onclick={subOne} class={Button.red}>
          -1
        </Button>
        <Button onclick={subOne} class="" disabled>
          -1
        </Button>
        <div>{count.get()[0][0]}</div>
        <div>{double.get()}</div>
        <button onclick={() => double.set(Math.random())}>随机</button>
      </div>
    </div>
  );
}
