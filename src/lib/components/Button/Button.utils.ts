"use client";

import { VariantProps } from "tailwind-variants";
import { ReactNode } from "react";
import { tv } from "lib/utils/tv";

export const ButtonClasses = tv({
  slots: {
    base: `
			relative flex items-center justify-center
			whitespace-nowrap
			rounded-full
			outline-offset-1 outline-gray-300
			transition-colors
			hover:cursor-pointer
			focus-visible:outline-[3px]
			disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-400
		`,
    contentWrapper: "inline-flex items-center justify-center gap-1 ",
    loadingIcon: "absolute animate-spin [animation-duration:2000ms]",
  },
  variants: {
    variant: {
      primary: {
        base: "bg-gray-700 text-white",
      },
      secondary: {
        base: `
					border border-gray-300
					bg-transparent
					text-gray-700
					outline-transparent
					hover:bg-gray-200
					focus-visible:border-gray-700 focus-visible:bg-gray-100
					active:bg-gray-700 active:text-white
				`,
      },
      tertiary: {
        base: "bg-transparent text-gray-700 outline-offset-0",
      },
    },
    size: {
      md: { base: "px-4 py-2 text-xl" },
      lg: { base: "w-full px-4 py-2 text-2xl" },
      icon: { base: "p-0" },
    },
    loading: {
      true: {
        contentWrapper: "opacity-0",
        loadingIcon: "opacity-100",
      },
      false: {
        contentWrapper: "opacity-100",
        loadingIcon: "opacity-0",
      },
    },
    buttonColor: {
      white: {
        base: "",
      },
    },
  },
  compoundVariants: [
    {
      buttonColor: "white",
      variant: "primary",
      class: {
        base: "bg-white text-gray-700",
      },
    },
    {
      buttonColor: "white",
      variant: "secondary",
      class: {
        base: "border-white text-white hover:bg-gray-700/60",
      },
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonClasses> {
  asChild?: boolean;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  contentClassName?: string;
  loaderSize?: number;
}
