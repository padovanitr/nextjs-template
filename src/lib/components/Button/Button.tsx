"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonClasses, ButtonProps } from "./Button.utils";
import { classNameMerge } from "lib/utils/classNameMerge";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      contentClassName,
      asChild = false,
      children,
      loading,
      startIcon,
      endIcon,
      loaderSize,
      ...props
    },
    ref,
  ) => {
    const { base, contentWrapper, loadingIcon } = ButtonClasses({
      loading,
    });
    if (asChild) {
      return (
        <Slot {...props} className={base()} ref={ref}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        {...props}
        className={classNameMerge(
          "mt-8 text-sm md:text-xl font-semibold hover:shadow-xl bg-black text-white py-3 px-6 md:py-5 md:px-14 rounded-full",
          { className },
        )}
        disabled={loading || props.disabled}
        ref={ref}
      >
        <div className={contentWrapper({ className: contentClassName })}>
          {startIcon}
          {children}
          {endIcon}
        </div>
        {/* {loading && (
          <LoaderIcon
            width={loaderSize ?? 24}
            height={loaderSize ?? 24}
            className={loadingIcon()}
          />
        )} */}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };
