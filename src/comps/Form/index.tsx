import { useProps, type Children, type ClassName, type IProps } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Item } from "./Item";
import { ItemVertical } from "./ItemVertical";

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
    <form
      class={twMerge(baseClass, className.get())}
      onclick={onclick}
      onsubmit={event => event.preventDefault()}
    >
      {children}
    </form>
  );
}

Form.Item = Item;
Form.ItemVertical = ItemVertical;
