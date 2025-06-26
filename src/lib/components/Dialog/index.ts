"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";

const Dialog = DialogPrimitive.Root;
type DialogProps = DialogPrimitive.DialogProps;

const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

export { Dialog, type DialogProps, DialogPortal, DialogClose, DialogTrigger };

export { DialogContent } from "./DialogContent";
export { DialogDescription } from "./DialogDescription";
export { DialogFooter } from "./DialogFooter";
export { DialogHeader } from "./DialogHeader";
export { DialogOverlay } from "./DialogOverlay";
export { DialogTitle } from "./DialogTitle";
