import { tv } from "lib/utils/tv";

export const DialogContentClasses = tv({
  base: `
		data-[state=open]:animate-in data-[state=closed]:animate-out fixed left-1/2
		top-1/2 z-50 grid
		w-full max-w-lg
		-translate-x-1/2 -translate-y-1/2 gap-4 border
		bg-white
		p-6
		shadow-lg duration-200
		sm:rounded-lg
	`,
  variants: {
    fade: {
      true: "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      false: "",
    },
    zoom: {
      true: "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      false: "",
    },
    slideLeft: {
      true: "data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2",
      false: "",
    },
    slideTop: {
      true: "data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%]",
      false: "",
    },
  },
  defaultVariants: {
    fade: true,
    slideLeft: true,
    slideTop: true,
    zoom: true,
  },
});
