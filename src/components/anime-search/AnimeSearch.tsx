import { useCallback } from 'react';

import type { AnimeSearchCategory as AnimeSearchCategoryType } from '@/types';

import { AnimeSearchTabs } from './AnimeSearchTabs';
import { AnimeSearchResults } from './AnimeSearchResults';
import { AnimeSearchCategory } from './AnimeSearchCategory';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAnimeSearchCategory, setAnimeSearchCategory } from '@/store/slices/animeSearch';

import styles from './style.module.scss';

export function AnimeSearch() {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectAnimeSearchCategory);

  const setCategory = useCallback(
    (category: AnimeSearchCategoryType) => {
      dispatch(setAnimeSearchCategory(category));
    },
    [dispatch]
  );

  return (
    <div className={styles.animeSearch}>
      <AnimeSearchTabs.Root value={category} setValue={setCategory}>
        <AnimeSearchCategory />
        <AnimeSearchResults />
      </AnimeSearchTabs.Root>
    </div>
  );
}
