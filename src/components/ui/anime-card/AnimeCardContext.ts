import { createContext, use } from 'react';

import type { AnimeShort } from '@/types';

type AnimeCardContextValue = AnimeShort;

export const AnimeCardContext = createContext<AnimeCardContextValue | null>(null);

export function useAnimeCardContext() {
  return use(AnimeCardContext)!;
}
