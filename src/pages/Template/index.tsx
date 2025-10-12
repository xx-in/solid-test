import { Button } from "@/comps/Button";
import { For } from "solid-js";

export default function Template() {
  const styles: Array<keyof typeof Button> = [
    "default",
    "sky",
    "blue",
    "green",
    "lime",
    "gray",
    "stone",
    "info",
    "orange",
    "yellow",
  ];
  return (
    <div>
      <section class="p-2">
        <h1>组件库</h1>
        <div class="flex gap-2">
          <For each={styles}>{style => <Button class={Button[style]}>{style}</Button>}</For>
        </div>
      </section>
    </div>
  );
}
