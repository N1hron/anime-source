import { motion } from 'motion/react';

import { AnimeCard } from '../ui/anime-card/AnimeCard';
import type { AnimeShort } from '@/types';

import styles from './style.module.scss';

type AnimeSearchResultsListProps = {
  requestId: string;
  data: AnimeShort[];
};

export function AnimeSearchResultsList({ requestId, data }: AnimeSearchResultsListProps) {
  return (
    <ul className={styles.list}>
      {data.map((item, i) => {
        return (
          <li className={styles.listItem} key={item.id}>
            <motion.div
              key={item.id + requestId}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(0.0625rem) brightness(0.5)' }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: 'none',
                transition: { duration: 0.5, delay: (1 * i) ** (1 / 1.1) / data.length },
              }}
            >
              <AnimeCard.Root {...item}>
                <AnimeCard.Wrapper>
                  <AnimeCard.Preview />
                  <AnimeCard.Title />
                  <AnimeCard.Subtitle />
                </AnimeCard.Wrapper>
              </AnimeCard.Root>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
