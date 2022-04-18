import { Card } from "react-bootstrap";
import type { Video } from "types/Video";

export type VideoProps = {
  video: Video;
};

export const VideoCard = ({
  video: { title, description, thumbnail },
}: VideoProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
