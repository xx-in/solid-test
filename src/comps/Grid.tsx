import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";

interface IGridProps {
  children: Children;
  class?: ClassName;
  onclick?: () => void;
}

export function Grid(props: IProps<IGridProps>) {
  const {
    children,
    class: className,
    onclick,
  } = useProps(props, {
    class: "",
  });

  console.log("??flex", children);

  const baseClass = twMerge(["grid items-center"]);

  return (
    <div class={twMerge(baseClass, className.get())} onclick={onclick}>
      {children}
    </div>
  );
}
