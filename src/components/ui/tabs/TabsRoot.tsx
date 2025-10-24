import { useId, useMemo, useRef, type ReactNode } from 'react';
import { type TabsContext, type TabsContextValue } from './TabsContext';

type TabsRootProps<V extends string> = {
  value: V;
  setValue: (value: V) => void;
  children: ReactNode;
};

export function createTabsRoot<V extends string>(TabsContext: TabsContext<V>) {
  return function TabsRoot({ value, setValue, children }: TabsRootProps<V>) {
    const triggersRef: TabsContextValue<V>['triggersRef'] = useRef([]);
    const baseId = useId();

    const contextValue: TabsContextValue<V> = useMemo(
      () => ({
        value,
        setValue,
        baseId,
        triggersRef,
      }),
      [value, setValue]
    );

    return <TabsContext value={contextValue}>{children}</TabsContext>;
  };
}
