import clsx from 'clsx';

import { useAnimeCardContext } from './AnimeCardContext';

import styles from './style.module.scss';

type AnimeCardPreviewProps = {
  className?: string;
};

export function AnimeCardPreview({ className }: AnimeCardPreviewProps) {
  const { main_picture } = useAnimeCardContext();
  const src = main_picture?.medium;
  const cl = clsx(styles.preview, className);

  return <img className={cl} src={src} alt='Preview' />;
}
