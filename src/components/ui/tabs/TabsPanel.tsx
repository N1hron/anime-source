import clsx from 'clsx';
import type { ReactNode } from 'react';

import { createPanelId, createTabId } from './utils';
import { type UseTabsContext } from './TabsContext';

import styles from './style.module.scss';

type TabsPanelProps<V extends string> = {
  value: V;
  className?: string;
  children: ReactNode;
};

export function createTabsPanel<V extends string>(useTabsContext: UseTabsContext<V>) {
  return function TabsPanel({ value, className, children }: TabsPanelProps<V>) {
    const { value: valueCurrent, baseId } = useTabsContext();
    const isActive = value === valueCurrent;
    const id = createPanelId(baseId, value);
    const tabId = createTabId(baseId, value);
    const cl = clsx(styles.panel, className);

    if (!isActive) return null;
    return (
      <div id={id} className={cl} role='tabpanel' aria-labelledby={tabId}>
        {children}
      </div>
    );
  };
}
