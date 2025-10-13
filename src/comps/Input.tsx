import { useProps, type ClassName, type IProps } from "@/utils";
import type { JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

interface IInputProps {
  class?: ClassName;
  onclick?: (e: MouseEvent) => void;
  oninput?: (e: InputEvent) => void;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  value?: string;
  type?: JSX.InputHTMLAttributes<HTMLInputElement>["type"];
  autocomplete?: "new-password" | "on";
}

export function Input(props: IProps<IInputProps>) {
  const {
    class: className,
    onclick,
    oninput,
    placeholder,
    value,
    disabled,
    readonly,
    type,
    autocomplete,
  } = useProps(props, {
    class: "",
    placeholder: "请输入",
    value: "",
    disabled: false,
    readonly: false,
    type: "text",
    autocomplete: "new-password",
  });

  const baseClass = twMerge([
    "w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition",
    "disabled:bg-gray-100 disabled:cursor-not-allowed",
    "read-only:focus:ring-0 read-only:focus:border-gray-300 read-only:cursor-default",
  ]);

  const handleInput: JSX.InputEventHandlerUnion<HTMLInputElement, InputEvent> = e => {
    const newValue = e.target.value;
    value.set(newValue);
    oninput?.(e);
  };

  return (
    <input
      class={twMerge(baseClass, className.get())}
      onclick={onclick}
      placeholder={placeholder.get()}
      value={value.get()}
      oninput={handleInput}
      readonly={readonly.get()}
      disabled={disabled.get()}
      type={type.get()}
      autocomplete={autocomplete.get()}
    />
  );
}
