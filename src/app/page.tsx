import LatestUpdatedEpisodeVideos from '@/components/LatestUpdatedVideos';
import TopAnime from '@/components/TopAnime';

export default function HomePage() {
  return (
    <main>
      <div className='container my-8'>
        <div className='grid items-start grid-cols-4 gap-6'>
          <LatestUpdatedEpisodeVideos />
          <TopAnime />
        </div>
      </div>
    </main>
  );
}
