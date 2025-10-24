import clsx from 'clsx';

import { selectAnimeSearchCategory } from '@/store/slices/animeSearch';
import { useAppSelector } from '@/store/hooks';
import { AnimeSearchTabs } from './AnimeSearchTabs';

import styles from './style.module.scss';

export function AnimeSearchResults() {
  const category = useAppSelector(selectAnimeSearchCategory);
  const isSearch = category === 'search';
  const cl = clsx(styles.results, isSearch && styles.resultsIsSearch);

  return (
    <AnimeSearchTabs.Panel className={cl} value={category}>
      {category}
    </AnimeSearchTabs.Panel>
  );
}
