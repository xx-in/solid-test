import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Flex } from "@/comps/Flex";
import { Show } from "solid-js";

export interface IFormItemProps {
  children: Children;
  class?: ClassName;
  onclick?: () => void;
  label: string;
  labelClass?: ClassName;
  showColon?: boolean;
  isRequired?: boolean;
}

/**
 * 水平组件
 * @param props
 * @returns
 */
export function Item(props: IProps<IFormItemProps>) {
  const {
    children,
    class: className,
    onclick,
    label,
    labelClass,
    showColon,
    isRequired,
  } = useProps(props, {
    class: "",
    showColon: true,
    labelClass: "",
    isRequired: false,
  });

  const baseClass = twMerge(["flex items-center flex-wrap justify-start my-4 gap-2"]);

  console.log("??children", typeof children);

  return (
    <Flex class={twMerge(baseClass, className.get())} onclick={onclick}>
      <div class={twMerge("w-20", labelClass.get())}>
        <Show when={isRequired.get()}>
          <span class="pr-0.5 text-red-500">*</span>
        </Show>
        {label.get()}
        <Show when={showColon.get()}>
          <span>：</span>
        </Show>
      </div>
      <div class="w-full flex-1">{children}</div>
      {/* <div class="absolute bottom-0 left-2 text-left text-sm text-red-500">出错了</div> */}
    </Flex>
  );
}
