import clsx from 'clsx';

import { useAnimeCardContext } from './AnimeCardContext';

import styles from './style.module.scss';

type AnimeCardSubtitleProps = {
  className?: string;
};

export function AnimeCardSubtitle({ className }: AnimeCardSubtitleProps) {
  const { alternative_titles } = useAnimeCardContext();
  const subtitle = alternative_titles?.en;
  const cl = clsx(styles.subtitle, className);

  return (
    <p className={cl} title={subtitle || undefined}>
      {subtitle}
    </p>
  );
}
