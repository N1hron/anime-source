import { useAppSelector } from '@/store/hooks';
import { useDebouncedValue } from '../hooks';
import { selectAnimeSearchCategory, selectAnimeSearchValue } from '@/store/slices/animeSearch';
import { useGetAnimeListQuery, useGetAnimeRankingQuery } from '@/store/slices/animeApi';
import type { AnimeFields, AnimeRankingType, AnimeSearchCategory } from '@/types';

const fields: AnimeFields[] = ['id', 'title', 'alternative_titles', 'main_picture'];

export function useAnimeSearch() {
  const category = useAppSelector(selectAnimeSearchCategory);
  const animeSearch = useGetAnimeSearch();
  const animeRanking = useGetAnimeRanking();

  if (category === 'search') {
    return animeSearch;
  }

  return animeRanking;
}

function useGetAnimeSearch() {
  const category = useAppSelector(selectAnimeSearchCategory);
  const search = useAppSelector(selectAnimeSearchValue);
  const q = useDebouncedValue(search, 500);
  const skip = !search || search.length < 3 || !q || q.length < 3 || category !== 'search';

  return useGetAnimeListQuery({ q, fields }, { skip: skip });
}

function useGetAnimeRanking() {
  const category = useAppSelector(selectAnimeSearchCategory);
  const ranking_type = categoryToRankingType(category);
  const skip = category === 'search';

  return useGetAnimeRankingQuery({ ranking_type, fields }, { skip });
}

function categoryToRankingType(category: AnimeSearchCategory): AnimeRankingType {
  switch (category) {
    case 'search':
    case 'popular':
      return 'bypopularity';
    case 'top':
      return 'tv';
    case 'airing':
    case 'upcoming':
      return category;
  }
}
