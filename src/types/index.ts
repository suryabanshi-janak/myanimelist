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
