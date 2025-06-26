import { classNameMerge } from "lib/utils/classNameMerge";
import React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={classNameMerge("fixed inset-0 z-50 bg-gray-700/40", className)}
    {...props}
  />
));

DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;
