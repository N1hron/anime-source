import type { Season, Weekday } from './common';

export type Anime = {
  id: number;
  title: string;
  main_picture: {
    large: string | null;
    medium: string;
  } | null;
  alternative_titles: {
    synonyms: string[] | null;
    en: string | null;
    ja: string | null;
  } | null;
  start_date: string | null;
  end_date: string | null;
  synopsis: string | null;
  mean: number | null;
  rank: number | null;
  popularity: number | null;
  num_list_users: number;
  num_scoring_users: number;
  nsfw: AnimeNSFWType | null;
  genres: {
    id: number;
    name: string;
  }[];
  created_at: string;
  updated_at: string;
  media_type: AnimeMediaType;
  status: AnimeStatus;
  my_list_status: null; // Status of user's anime list. If there is no access token, the API excludes this field
  num_episodes: number;
  start_season: {
    year: number;
    season: Season;
  } | null;
  broadcast: {
    day_of_the_week: AnimeWeekday; // Day of the week broadcast in Japan time.
    start_time: string | null; // For example: "01:25"
  } | null;
  source: AnimeSource | null;
  average_episode_duration: number | null;
  rating: AnimeRating | null;
  studios: {
    id: number;
    name: string;
  }[];
};

/** Has fields that cannot be contained in a list */
export type AnimeFull = Anime & {
  pictures: {
    large: string | null;
    medium: string;
  }[];
  background: string | null;
  related_anime: {
    node: AnimeFull;
    relation_type: AnimeRelationType;
    relation_type_formatted: string; // The format of relation_type for human like "Alternative version"
  }[];
  related_manga: null; // Ignored
  recommendations: {
    node: AnimeFull;
    num_recommendations: number;
  };
  statistics: {
    num_list_users: number;
    status: {
      watching: number;
      completed: number;
      on_hold: number;
      dropped: number;
      plan_to_watch: number;
    };
  } | null;
};

type AnimeNSFWType = 'white' | 'gray' | 'black';

type AnimeWeekday = Weekday | 'other';

type AnimeSource =
  | 'other'
  | 'original'
  | 'manga'
  | '4_koma_manga'
  | 'web_manga'
  | 'digital_manga'
  | 'novel'
  | 'light_novel'
  | 'visual_novel'
  | 'game'
  | 'card_game'
  | 'book'
  | 'picture_book'
  | 'radio'
  | 'music';

type AnimeMediaType = 'unknown' | 'tv' | 'ova' | 'movie' | 'special' | 'ona' | 'music';

type AnimeStatus = 'finished_airing' | 'currently_airing' | 'not_yet_aired';

type AnimeRating = 'g' | 'pg' | 'pg_13' | 'r' | 'r+' | 'rx';

type AnimeRelationType =
  | 'sequel'
  | 'prequel'
  | 'alternative_setting'
  | 'alternative_version'
  | 'side_story'
  | 'parent_story'
  | 'summary'
  | 'full_story';

export type AnimeFields = keyof Anime;

type Paging = {
  previous: string | null;
  next: string;
};

type DataWithPaging<D> = {
  data: D[];
  paging: Paging;
};

export type GetAnimeListQueryParameters = {
  q?: string;
  limit?: number; // The maximum value is 100
  offset?: number;
  fields?: AnimeFields[];
};

export type GetAnimeListResult = DataWithPaging<{ node: Anime }>;

export type AnimeSearchCategory = 'search' | 'top' | 'popular' | 'airing' | 'upcoming';
