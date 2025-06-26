import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { DrawerOverlay } from "./DrawerOverlay";
import { classNameMerge } from "lib/utils/classNameMerge";

const DrawerPortal = DrawerPrimitive.Portal;

export type DrawerContentProps = React.ComponentPropsWithRef<
  typeof DrawerPrimitive.Content
> & {
  omitCloseButton?: boolean;
  closeButtonClassName?: string;
};

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  Omit<DrawerContentProps, "ref">
>(
  (
    { className, omitCloseButton, closeButtonClassName, children, ...props },
    ref,
  ) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={classNameMerge(
          "fixed bg-white inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[27px] border",
          className,
        )}
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
          <DrawerPrimitive.Close
            className={classNameMerge(
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:text-gray-700",
              closeButtonClassName,
            )}
          >
            X<span className="sr-only">Close</span>
          </DrawerPrimitive.Close>
        )}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  ),
);
DrawerContent.displayName = "DrawerContent";
