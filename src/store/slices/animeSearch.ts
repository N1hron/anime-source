import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AnimeSearchCategory } from '@/types';

type AnimeSearchState = {
  category: AnimeSearchCategory;
  value: string;
};

const initialState: AnimeSearchState = {
  category: 'search',
  value: '',
};

const animeSearchSlice = createSlice({
  name: 'animeSearch',
  initialState,
  reducers: {
    setAnimeSearchCategory: (state, action: PayloadAction<AnimeSearchCategory>) => {
      state.category = action.payload;
    },
    setAnimeSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  selectors: {
    selectAnimeSearchCategory: (state) => state.category,
    selectAnimeSearchValue: (state) => state.value,
    selectShowSearchInput: (state) => state.category === 'search',
  },
});

export const animeSearchReducer = animeSearchSlice.reducer;
export const { setAnimeSearchCategory, setAnimeSearchValue } = animeSearchSlice.actions;
export const { selectAnimeSearchCategory, selectAnimeSearchValue, selectShowSearchInput } =
  animeSearchSlice.selectors;
