import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './style.module.scss';

type TabsListProps = {
  className?: string;
  children: ReactNode;
};

export function TabsList({ className, children }: TabsListProps) {
  const cl = clsx(styles.list, className);

  return (
    <div className={cl} role='tablist'>
      {children}
    </div>
  );
}
