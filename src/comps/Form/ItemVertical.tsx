import { useProps, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Flex } from "@/comps/Flex";
import { Show } from "solid-js";
import { type IFormItemProps } from "./Item";

/**
 * 垂直组件
 * @param props
 * @returns
 */
export function ItemVertical(props: IProps<IFormItemProps>) {
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
    showColon: false,
    labelClass: "",
    isRequired: false,
  });

  const baseClass = twMerge(["flex items-center flex-wrap justify-start my-4 flex-col gap-2"]);

  return (
    <Flex class={twMerge(baseClass, className.get())} onclick={onclick}>
      <div class={twMerge("w-full pl-1", labelClass.get())}>
        <Show when={isRequired.get()}>
          <span class="pr-0.5 text-red-500">*</span>
        </Show>
        {label.get()}
        <Show when={showColon.get()}>
          <span>：</span>
        </Show>
      </div>
      <div class="w-full flex-1">{children}</div>
    </Flex>
  );
}
