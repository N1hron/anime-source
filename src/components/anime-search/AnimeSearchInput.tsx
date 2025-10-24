import type { ChangeEvent } from 'react';

import { TextInput } from '../ui';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectShowSearchInput, setAnimeSearchValue } from '@/store/slices/animeSearch';

import styles from './style.module.scss';

export function AnimeSearchInput() {
  const dispatch = useAppDispatch();
  const disabled = !useAppSelector(selectShowSearchInput);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    dispatch(setAnimeSearchValue(value));
  }

  return (
    <div className={styles.input}>
      <TextInput
        placeholder='Search for your anime'
        disabled={disabled}
        onChange={handleSearchChange}
      />
    </div>
  );
}
