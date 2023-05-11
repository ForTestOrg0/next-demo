"use client";

import React, { HTMLAttributes, forwardRef, ReactNode } from "react";
import clsx from "clsx";

interface InputProps {
  className?: string;
  prefixCls?: string;
  prefix?: ReactNode;
  suffixCls?: string;
  suffix?: ReactNode;
}
interface InputRef {
  focus: (options: any) => void;
  blur: () => void;
  select: () => void;
  input: HTMLInputElement | null;
}
const Input = forwardRef<InputRef, InputProps & HTMLAttributes<HTMLInputElement>>(function Input(props, ref) {
  const { className, prefix, prefixCls, suffix, suffixCls } = props;
  return (
    <div className={clsx("relative inline-block", className)}>
      <input
        ref={ref}
        className={clsx("rounded px-4 py-1 text-sm border", {"pl-8": prefix, "pr-8": suffix})}
        {...props}
      ></input>
      {prefix && <span className={clsx("absolute top-0 left-1 h-full w-7 flex", prefixCls)}>{prefix}</span>}
      {suffix && <span className={clsx("absolute top-0 right-1 h-full w-7 flex", suffixCls)}>{suffix}</span>}
    </div>
  );
});

export default Input;
