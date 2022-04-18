import type { Video } from "types/Video";
import { VideoCard } from "components/VideoCard";

export type VideosListProps = {
  videos: Video[];
};

export const VideosList = ({ videos }: VideosListProps) => {
  return (
    <div>
      {videos.map((video) => (
        <VideoCard key={video.slug} video={video} />
      ))}
    </div>
  );
};
