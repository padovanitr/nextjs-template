"use client";

import { ChildrenProps } from "lib/utils/type";
import { ContextType, createContext, useMemo } from "react";

export const EnvContext = createContext({});

export type ProvidersProps = ChildrenProps & {};

export const Providers = ({ children }: ProvidersProps) => {
  const envContextValue: ContextType<typeof EnvContext> = useMemo(
    () => ({}),
    [],
  );

  return (
    <EnvContext.Provider value={envContextValue}>
      {children}
    </EnvContext.Provider>
  );
};
