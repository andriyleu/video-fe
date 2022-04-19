import Link from "next/link";
import type { Video } from "types/video";
import { VideoCard } from "components/VideoCard";
import styles from "./VideosList.module.css";

export type VideosListProps = {
  videos: { id: number; attributes: Video }[];
};

export const VideosList = ({ videos }: VideosListProps) => {
  return (
    <div className={styles.videoList}>
      {videos.map((video) => (
        <Link key={video.attributes.slug} href={`/${video.id}`} passHref>
          <a>
            <VideoCard video={video.attributes} />
          </a>
        </Link>
      ))}
    </div>
  );
};
