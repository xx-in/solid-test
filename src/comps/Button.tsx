import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";

interface IButtonProps {
  children: Children;
  class?: ClassName;
  disabled?: boolean;
  onclick?: () => void;
}

export function Button(props: IProps<IButtonProps>) {
  const {
    children,
    class: className,
    onclick,
    disabled,
  } = useProps(props, {
    class: "",
    disabled: false,
  });

  const baseClass = twMerge([
    "cursor-pointer p-2 px-4 rounded-xl text-white",
    "disabled:cursor-not-allowed shadow",
    "enabled:bg-blue-500  enabled:hover:bg-blue-600",
    "disabled:bg-blue-400",
  ]);
  return (
    <button class={twMerge(baseClass, className.get())} onclick={onclick} disabled={disabled.get()}>
      {children.get()}
    </button>
  );
}

Button.red = twMerge(["enabled:bg-red-500  enabled:hover:bg-red-600", "disabled:bg-red-400"]);

Button.blue = twMerge(["enabled:bg-blue-500  enabled:hover:bg-blue-600", "disabled:bg-blue-400"]);
