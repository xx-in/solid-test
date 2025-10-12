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
    disabled,
    onclick,
  } = useProps(props, {
    class: Button.default,
    disabled: false,
  });

  const baseClass = twMerge([
    "cursor-pointer py-1 px-4 rounded-sm ",
    "disabled:cursor-not-allowed",
    "transition border border-transparent",
    "inline-flex items-center",
  ]);
  return (
    <button class={twMerge(baseClass, className.get())} onclick={onclick} disabled={disabled.get()}>
      {children.get()}
    </button>
  );
}

Button.default = twMerge([
  "text-gray-600 border-gray-300",
  "enabled:hover:bg-blue-100 enabled:hover:border-blue-200 hover:enabled:text-blue-500",
  "enabled:active:border-blue-400",
]);

Button.blue = twMerge([
  "text-white",
  "enabled:bg-blue-500  enabled:hover:bg-blue-400",
  "enabled:active:bg-blue-600",
  "disabled:bg-blue-400",
]);

Button.sky = twMerge([
  "text-white",
  "enabled:bg-sky-500  enabled:hover:bg-sky-400",
  "enabled:active:bg-sky-600",
  "disabled:bg-sky-400",
]);

Button.green = twMerge([
  "text-white",
  "enabled:bg-green-500  enabled:hover:bg-green-400",
  "enabled:active:bg-green-600",
  "disabled:bg-green-400",
]);

Button.lime = twMerge([
  "text-white",
  "enabled:bg-lime-500  enabled:hover:bg-lime-400",
  "enabled:active:bg-lime-600",
  "disabled:bg-lime-400",
]);

Button.gray = twMerge([
  "text-white",
  "enabled:bg-gray-500  enabled:hover:bg-gray-400",
  "enabled:active:bg-gray-600",
  "disabled:bg-gray-400",
]);

Button.stone = twMerge([
  "text-white",
  "enabled:bg-stone-500  enabled:hover:bg-stone-400",
  "enabled:active:bg-stone-600",
  "disabled:bg-stone-400",
]);

Button.info = twMerge([
  "text-white",
  "enabled:bg-stone-400 enabled:hover:bg-stone-500",
  "enabled:active:bg-stone-400",
  "disabled:bg-stone-300",
]);

Button.orange = twMerge([
  "text-white",
  "enabled:bg-orange-500  enabled:hover:bg-orange-400",
  "enabled:active:bg-orange-600",
  "disabled:bg-orange-400",
]);

Button.yellow = twMerge([
  "text-white",
  "enabled:bg-yellow-500  enabled:hover:bg-yellow-400",
  "enabled:active:bg-yellow-600",
  "disabled:bg-yellow-400",
]);
