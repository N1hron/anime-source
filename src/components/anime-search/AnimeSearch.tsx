import clsx from 'clsx';
import { useCallback } from 'react';

import { AnimeSearchTabs } from './AnimeSearchTabs';
import { AnimeSearchResults } from './AnimeSearchResults';
import { AnimeSearchControls } from './AnimeSearchControls';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  selectAnimeSearchCategory,
  selectShowSearchInput,
  setAnimeSearchCategory,
} from '@/store/slices/animeSearch';
import type { AnimeSearchCategory as AnimeSearchCategoryType } from '@/types';

import styles from './style.module.scss';

export function AnimeSearch() {
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectAnimeSearchCategory);
  const isInputVisible = useAppSelector(selectShowSearchInput);
  const cl = clsx(styles.animeSearch, isInputVisible && styles.animeSearchInputVisible);

  const setCategory = useCallback(
    (category: AnimeSearchCategoryType) => {
      dispatch(setAnimeSearchCategory(category));
    },
    [dispatch]
  );

  return (
    <div className={cl}>
      <AnimeSearchTabs.Root value={category} setValue={setCategory}>
        <AnimeSearchControls />
        <AnimeSearchResults />
      </AnimeSearchTabs.Root>
    </div>
  );
}
