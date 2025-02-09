"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.SelectValue
          placeholder="Select a country..."
          className="text-black"
        />
        <SelectPrimitive.SelectIcon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.SelectIcon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.SelectContent
          side="bottom"
          sideOffset={8}
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.SelectViewport>
            <SelectPrimitive.Item
              value="br"
              className="flex items-center justify-between gap-2 overflow-hidden rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brasil
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="us"
              className="flex items-center justify-between gap-2 overflow-hidden rounded-lg px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-100"
            >
              <SelectPrimitive.ItemText className="text-black">
                United State
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.SelectViewport>
        </SelectPrimitive.SelectContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
