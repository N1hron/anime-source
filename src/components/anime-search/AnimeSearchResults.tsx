import { useMemo } from 'react';

import { AnimeSearchTabs } from './AnimeSearchTabs';
import { AnimeSearchResultsList } from './AnimeSearchResultsList';
import { selectAnimeSearchCategory } from '@/store/slices/animeSearch';
import { useAppSelector } from '@/store/hooks';
import { useAnimeSearch } from './useAnimeSearch';

import styles from './style.module.scss';

export function AnimeSearchResults() {
  const category = useAppSelector(selectAnimeSearchCategory);
  const { currentData, requestId } = useAnimeSearch();

  const data = useMemo(() => {
    return currentData?.data?.map((result) => result.node);
  }, [currentData]);

  return (
    <AnimeSearchTabs.Panel className={styles.results} value={category}>
      {data && requestId && <AnimeSearchResultsList requestId={requestId} data={data} />}
    </AnimeSearchTabs.Panel>
  );
}
