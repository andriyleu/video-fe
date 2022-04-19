import { Ratio } from "react-bootstrap";
import type { Video } from "types/video";

export type VideoPlayerProps = {
  video: Video;
};

export const VideoPlayer = ({
  video: { title, url, description },
}: VideoPlayerProps) => {
  return (
    <div>
      <Ratio aspectRatio="16x9">
        <video controls role="interactive">
          <source src={url} type="video/mp4" />
        </video>
      </Ratio>
      <h2>{title}</h2>
      <span>{description}</span>
    </div>
  );
};
