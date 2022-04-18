import type { Video } from "types/Video";

export type VideoPlayerProps = {
  video: Video;
};

export const VideoPlayer = ({ video: { title, url } }: VideoPlayerProps) => {
  return (
    <div>
      <video controls>
        <source src={url} type="video/mp4" />
      </video>
      <h2>{title}</h2>
    </div>
  );
};
