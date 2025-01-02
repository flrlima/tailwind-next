import { ComponentProps } from "react";

interface IInputPrefixProps extends ComponentProps<"div"> {}

// icone
export function InputPrefix(props: IInputPrefixProps) {
  return <div {...props} />;
}

interface IInputControlProps extends ComponentProps<"input"> {}
// input mesmo
export function InputControl(props: IInputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

export interface IInputRootProps extends ComponentProps<"div"> {}

export function InputRoot(props: IInputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md"
      {...props}
    />
  );
}
