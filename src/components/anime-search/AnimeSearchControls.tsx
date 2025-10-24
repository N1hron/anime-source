import { AnimeSearchTabs } from './AnimeSearchTabs';
import { AnimeSearchInput } from './AnimeSearchInput';

import styles from './style.module.scss';

export function AnimeSearchControls() {
  return (
    <div className={styles.controls}>
      <AnimeSearchTabs.List className={styles.category}>
        <AnimeSearchTabs.Trigger value='search'>search</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='top'>top</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='popular'>popular</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='airing'>airing</AnimeSearchTabs.Trigger>
        <AnimeSearchTabs.Trigger value='upcoming'>upcoming</AnimeSearchTabs.Trigger>
      </AnimeSearchTabs.List>
      <AnimeSearchInput />
    </div>
  );
}
