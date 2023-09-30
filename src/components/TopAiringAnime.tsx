'use client';

import { useQuery } from '@tanstack/react-query';
import { ANIME_FILTERS, API_ROUTES, JIKAN_BASE_URL } from '@/services/config';
import SectionHeading from './SectionHeading';
import getQueryParams from '@/services/utils';
import { Anime } from '@/types/anime';
import Image from 'next/image';

const getTopAiringAnime = async (filters: Record<string, string>) => {
  const queryParams = getQueryParams(filters);
  const url = `${JIKAN_BASE_URL + API_ROUTES.TOP_ANIME}?${queryParams}`;
  const response = await fetch(url);
  return (await response.json()) as { data: Anime[] };
};

export default function TopAiringAnime() {
  const { data: topAnime } = useQuery({
    queryFn: () =>
      getTopAiringAnime({ filter: ANIME_FILTERS.AIRING, limit: '6' }),
    queryKey: ['topAnime'],
    select: ({ data }) => data,
  });

  return (
    <section className='col-span-2'>
      <SectionHeading heading='top airing anime' />

      {topAnime?.length ? (
        <div className='mt-6 space-y-2'>
          {topAnime?.map((anime) => (
            <div key={anime.mal_id} className='flex space-x-4'>
              <div className=''>
                <div className=''>
                  <Image
                    src={anime.images.webp.image_url}
                    alt='image'
                    width={100}
                    height={150}
                  />
                </div>
              </div>
              <div className='flex-1'>
                <h4>{anime.title_english}</h4>
              </div>
              <div className=''>{anime.score}</div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
