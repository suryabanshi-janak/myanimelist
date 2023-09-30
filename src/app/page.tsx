import LatestUpdatedEpisodeVideos from '@/components/LatestUpdatedVideos';
import TopAiringAnime from '@/components/TopAiringAnime';

export default function HomePage() {
  return (
    <main>
      <div className='container my-8'>
        <div className='grid items-start grid-cols-6 gap-6'>
          <LatestUpdatedEpisodeVideos />
          <TopAiringAnime />
        </div>
      </div>
    </main>
  );
}
