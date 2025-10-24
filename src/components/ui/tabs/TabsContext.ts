import { createContext, use, type Context, type RefObject } from 'react';

export type TabsContextValue<V extends string> = {
  value: V;
  setValue: (value: V) => void;
  baseId: string;
  triggersRef: RefObject<{ value: V; ref: RefObject<HTMLButtonElement | null> }[]>;
};

export type TabsContext<V extends string> = Context<TabsContextValue<V>>;
export type UseTabsContext<V extends string> = () => TabsContextValue<V>;

export function createTabsContext<V extends string>(): [TabsContext<V>, UseTabsContext<V>] {
  const Context = createContext<TabsContextValue<V> | null>(null) as TabsContext<V>;
  const useContext = () => use(Context);

  return [Context, useContext] as const;
}
