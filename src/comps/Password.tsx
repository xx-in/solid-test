import { useProps, useSignal, type ClassName, type IProps } from "@/utils";
import { Show, type JSX } from "solid-js";
import { twMerge } from "tailwind-merge";
import { Svg } from "./Svg";

interface IPasswordProps {
  class?: ClassName;
  onclick?: (e: MouseEvent) => void;
  oninput?: (e: InputEvent) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: string;
  autocomplete?: "new-password" | "on";
}

export function Password(props: IProps<IPasswordProps>) {
  const {
    class: className,
    onclick,
    oninput,
    placeholder,
    value,
    disabled,
    readonly,
    autocomplete,
  } = useProps(props, {
    class: "",
    placeholder: "请输入",
    value: "",
    disabled: false,
    readonly: false,
    autocomplete: "new-password",
  });

  const baseClass = twMerge([
    "w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition px-1",
    "disabled:bg-gray-100 disabled:cursor-not-allowed",
    "read-only:focus:ring-0 read-only:focus:border-gray-300 read-only:cursor-default",
    "inline-flex items-stretch",
  ]);

  const handleInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = e => {
    const newValue = e.target.value;
    value.set(newValue);
    oninput?.(e);
  };

  const inputClass = twMerge(["border-none outline-none ring-0", "flex-1 p-2"]);

  const type = useSignal("password");

  function toggle() {
    if (type.get() == "text") {
      type.set("password");
    } else {
      type.set("text");
    }
  }

  return (
    <div class={twMerge(baseClass, className.get())}>
      <input
        onclick={onclick}
        placeholder={placeholder.get()}
        value={value.get()}
        oninput={handleInput}
        readonly={readonly.get()}
        disabled={disabled.get()}
        class={inputClass}
        type={type.get()}
        autocomplete={autocomplete.get()}
      />
      <div class="flex items-center p-2" onclick={toggle}>
        <Svg class="size-4 cursor-pointer">
          <Show when={type.get() != "password"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288c52.608 79.872 211.456 288 436.8 288c225.28 0 384.128-208.064 436.8-288c-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160s-71.744-160-160-160"
                stroke-width="25.5"
                stroke="currentColor"
              />
            </svg>
          </Show>
          <Show when={type.get() == "password"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path
                fill="currentColor"
                d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6s-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8c-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4s12.8 9.6 22.4 9.6s16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2c-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8c160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
                stroke-width="25.5"
                stroke="currentColor"
              />
              <path
                fill="currentColor"
                d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2c64 0 115.2-22.4 160-64c41.6-41.6 64-96 64-160c0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4c0 44.8-16 83.2-48 112s-67.2 48-112 48"
                stroke-width="25.5"
                stroke="currentColor"
              />
            </svg>
          </Show>
        </Svg>
      </div>
    </div>
  );
}
