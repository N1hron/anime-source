import { useMemo, type ReactNode } from 'react';

import { AnimeCardContext } from './AnimeCardContext';
import type { AnimeShort } from '@/types';

type AnimeCardRootProps = AnimeShort & {
  children: ReactNode;
};

export function AnimeCardRoot({
  id,
  title,
  alternative_titles,
  main_picture,
  children,
}: AnimeCardRootProps) {
  const value = useMemo(
    () => ({ id, title, alternative_titles, main_picture }),
    [id, title, alternative_titles, main_picture]
  );

  return <AnimeCardContext value={value}>{children}</AnimeCardContext>;
}
