import { appendComponentToBody, randomId, useDestroy, useSignal } from "@/utils";
import { For } from "solid-js";
import { Svg } from "./Svg";
import { twMerge } from "tailwind-merge";

export type ToastType = "success" | "error" | "info" | "warning";

export type ToastItem = {
  id: string;
  message: string;
  class?: string;
  duration?: number;
  type: ToastType;
};

const toasts = useSignal<ToastItem[]>([]);

// 添加提示
export function addToast(message: string, type: ToastType = "info", duration = 3000) {
  const id = randomId();
  toasts.update(cur => {
    cur.push({ id, message, type, duration });
  });
}

// 移除提示
export function removeToast(id: string) {
  toasts.set(cur => cur.filter(t => t.id !== id));
}

export function Toast() {
  return (
    <div class="fixed top-5 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center gap-4">
      <For each={toasts.get()}>
        {toast => <ToastItem toast={toast} onClose={() => removeToast(toast.id)} />}
      </For>
    </div>
  );
}

export function ToastItem(props: { toast: ToastItem; onClose: () => void }) {
  const closing = useSignal(false);

  const handleClose = () => {
    closing.set(true);
    setTimeout(() => props.onClose(), 300); // 与动画时间匹配，需要比动画时间偏短，因为函数有延迟
  };

  // 自动关闭
  const timer = setTimeout(handleClose, props.toast.duration || 3000);
  useDestroy(() => clearTimeout(timer));

  return (
    <div
      class={twMerge([
        "inline-flex items-center rounded-lg bg-white px-4 py-2 shadow-md",
        "justify-center border border-gray-100 text-stone-500",
        "transform transition-all duration-300 ease-in-out", // 只负责出现
        closing.get()
          ? "animate-fade-out -translate-y-2 opacity-0"
          : "animate-fade-in translate-y-0 opacity-100",
        props.toast.class,
      ])}
    >
      {Icons[props.toast.type]()}
      <span>{props.toast.message}</span>
    </div>
  );
}

export function createToast() {
  appendComponentToBody(Toast);
}

const Icons = {
  success: () => (
    <Svg class="mr-2 size-5 text-green-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
          stroke-width="25.5"
          stroke="currentColor"
        />
      </svg>
    </Svg>
  ),
  error: () => (
    <Svg class="mr-2 size-5 text-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512L353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336L616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512L670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
          stroke-width="25.5"
          stroke="currentColor"
        />
      </svg>
    </Svg>
  ),
  info: () => (
    <Svg class="mr-2 size-5 text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296c-44.096 0-108.992 44.736-148.48 101.504c0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04c67.84 0 107.904-43.648 147.456-100.416z"
          stroke-width="25.5"
          stroke="currentColor"
        />
      </svg>
    </Svg>
  ),
  warning: () => (
    <Svg class="mr-2 size-5 text-orange-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path
          fill="currentColor"
          d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4a51.2 51.2 0 0 0 0 102.4"
          stroke-width="25.5"
          stroke="currentColor"
        />
      </svg>
    </Svg>
  ),
};

createToast();
