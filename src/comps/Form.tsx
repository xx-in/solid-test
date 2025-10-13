import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Flex } from "./Flex";
import { Show } from "solid-js";

interface IFormProps {
  children: Children;
  class?: ClassName;
  onclick?: () => void;
}

export function Form(props: IProps<IFormProps>) {
  const {
    children,
    class: className,
    onclick,
  } = useProps(props, {
    class: "",
  });

  const baseClass = twMerge([""]);

  return (
    <form class={twMerge(baseClass, className.get())} onclick={onclick}>
      {children}
    </form>
  );
}

interface IFormItemProps {
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
function Item(props: IProps<IFormItemProps>) {
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
    </Flex>
  );
}

/**
 * 垂直组件
 * @param props
 * @returns
 */
function ItemVertical(props: IProps<IFormItemProps>) {
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
Form.Item = Item;
Form.ItemVertical = ItemVertical;
