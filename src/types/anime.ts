export interface Anime {
  mal_id: number;
  images: {
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
    };
    string: string;
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;

  studios: [
    {
      mal_id: number;
      type: string;
      name: string;
    }
  ];
  genres: [
    {
      mal_id: number;
      type: string;
      name: string;
    }
  ];
  themes: [
    {
      mal_id: number;
      type: string;
      name: string;
    }
  ];
}

export interface LatestUpdatedVideos {
  entry: {
    mal_id: number;
    images: {
      webp: {
        image_url: string;
      };
    };
    title: string;
  };
  episodes: [
    {
      mal_id: number;
      title: string;
      premium: boolean;
    }
  ];
  region_locked: boolean;
}
