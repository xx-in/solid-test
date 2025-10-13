import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";

interface IFlexProps {
  children: Children;
  class?: ClassName;
  onclick?: () => void;
}

export function Flex(props: IProps<IFlexProps>) {
  const {
    children,
    class: className,
    onclick,
  } = useProps(props, {
    class: "",
  });

  console.log("??flex", children);

  const baseClass = twMerge(["flex items-center flex-wrap"]);

  return (
    <div class={twMerge(baseClass, className.get())} onclick={onclick}>
      {children}
    </div>
  );
}
