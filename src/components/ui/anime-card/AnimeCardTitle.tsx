import clsx from 'clsx';

import { useAnimeCardContext } from './AnimeCardContext';

import styles from './style.module.scss';

type AnimeCardTitleProps = {
  className?: string;
};

export function AnimeCardTitle({ className }: AnimeCardTitleProps) {
  const { title } = useAnimeCardContext();
  const cl = clsx(styles.title, className);

  return (
    <h3 className={cl} title={title}>
      {title}
    </h3>
  );
}
