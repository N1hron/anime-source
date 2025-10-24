import { AnimeSearch } from '../anime-search/AnimeSearch';
import styles from './style.module.scss';

export function App() {
  return (
    <main className={styles.main}>
      <AnimeSearch />
    </main>
  );
}
