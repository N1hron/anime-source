import clsx from 'clsx';

import { TextInput } from '../ui';
import { AnimeSearchTabs } from './AnimeSearchTabs';
import { useAppSelector } from '@/store/hooks';
import { selectShowSearchInput } from '@/store/slices/animeSearch';

import styles from './style.module.scss';

export function AnimeSearchCategory() {
  const showInput = useAppSelector(selectShowSearchInput);
  const inputWrapperCl = clsx(styles.inputWrapper, showInput && styles.inputWrapperIsVisible);

  return (
    <div className={styles.category}>
      <AnimeSearchTabs.List className={styles.tabList}>
        <AnimeSearchTabs.Trigger value='search'>search</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='top'>top</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='popular'>popular</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='airing'>airing</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='upcoming'>upcoming</AnimeSearchTabs.Trigger>
      </AnimeSearchTabs.List>

      <div className={inputWrapperCl}>
        <TextInput
          className={styles.input}
          placeholder='Search for your anime'
          disabled={!showInput}
          inert={!showInput}
        />
      </div>
    </div>
  );
}
