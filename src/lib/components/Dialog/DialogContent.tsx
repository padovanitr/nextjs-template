"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "tailwind-variants";

import { DialogContentClasses } from "./utils";
import { DialogOverlay, DialogPortal } from ".";
import { classNameMerge } from "lib/utils/classNameMerge";

export type DialogContentProps = React.ComponentPropsWithRef<
  typeof DialogPrimitive.Content
> & {
  variants?: VariantProps<typeof DialogContentClasses>;
  omitCloseButton?: boolean;
  closeButtonClassName?: string;
  overlayClassName?: string;
  overlayClose?: boolean;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  Omit<DialogContentProps, "ref">
>(
  (
    {
      className,
      closeButtonClassName,
      overlayClose,
      overlayClassName,
      children,
      omitCloseButton,
      variants,
      ...props
    },
    ref,
  ) => (
    <DialogPortal>
      <DialogOverlay className={overlayClassName}>
        {overlayClose && (
          <DialogPrimitive.Close className="focus:ring-secondary-400 absolute right-6 top-10 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-gray-700">
            X
          </DialogPrimitive.Close>
        )}
      </DialogOverlay>
      <DialogPrimitive.Content
        ref={ref}
        className={DialogContentClasses({ ...variants, className })}
        {...props}
        onPointerDownOutside={(e) => {
          if (
            e.target instanceof Element &&
            e.target.closest("[data-sonner-toast]")
          ) {
            e.preventDefault();
          }
        }}
      >
        {children}
        {!omitCloseButton && (
          <DialogPrimitive.Close
            className={classNameMerge(
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-gray-700",
              closeButtonClassName,
            )}
          >
            X<span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  ),
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
