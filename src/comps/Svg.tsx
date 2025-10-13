import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";

interface ISvgProps {
  children: Children;
  class?: ClassName;
  onclick?: () => void;
}

export function Svg(props: IProps<ISvgProps>) {
  const {
    children,
    class: className,
    onclick,
  } = useProps(props, {
    class: "",
  });

  const baseClass = twMerge(["flex items-center"]);

  return (
    <svg class={twMerge(baseClass, className.get())} onclick={onclick}>
      {children}
    </svg>
  );
}
