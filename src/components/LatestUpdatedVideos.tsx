'use client';

import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import SectionHeading from './SectionHeading';
import { API_ROUTES, JIKAN_BASE_URL } from '@/services/config';
import { LatestUpdatedVideos } from '@/types/anime';
import { Icons } from './Icons';

const getLatestEpisodes = async () => {
  const url = JIKAN_BASE_URL + API_ROUTES.LATEST_UPDATED_EPISODES;
  const response = await fetch(url);
  return (await response.json()) as { data: LatestUpdatedVideos[] };
};

export default function LatestUpdatedEpisodeVideos() {
  const [videosData, setVideosData] = React.useState<LatestUpdatedVideos[]>([]);

  const { data } = useQuery({
    queryFn: getLatestEpisodes,
    queryKey: ['latestEpisodes'],
    select: ({ data }) => data,
  });

  React.useEffect(() => {
    data?.length && setVideosData(data.slice(0, 6));
  }, [data]);

  return (
    <section className='col-span-3'>
      <SectionHeading heading='latest updated episodes videos' />

      <div className='grid grid-cols-3 gap-4 mt-6 gap-x-2'>
        {videosData?.map((video) => (
          <div key={video.entry.mal_id}>
            <div className='relative w-full h-96'>
              <Image
                src={video.entry.images.webp.image_url}
                fill
                alt='episode picture'
              />
            </div>
            <div className='my-2'>
              <h4 className='text-lg leading-8 truncate'>
                {video.entry.title}
              </h4>
              <div className='flex items-center gap-2 mt-2'>
                <Icons.episode className='w-4 h-4 font-bold text-primary' />
                <p className='text-sm'>{video.episodes[0].title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
