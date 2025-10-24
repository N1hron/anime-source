import clsx from 'clsx';

import type { ComponentPropsWithoutRef } from 'react';

import styles from './style.module.scss';

type TextInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;

export function TextInput({ className, ...props }: TextInputProps) {
  const cl = clsx(styles.textInput, className);

  return <input className={cl} type='text' {...props} />;
}
