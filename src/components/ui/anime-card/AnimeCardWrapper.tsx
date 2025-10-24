import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './style.module.scss';

type AnimeCardWrapperProps = {
  className?: string;
  children: ReactNode;
};

export function AnimeCardWrapper({ className, children }: AnimeCardWrapperProps) {
  const cl = clsx(styles.wrapper, className);

  return <article className={cl}>{children}</article>;
}
