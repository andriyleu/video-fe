import { Card } from "react-bootstrap";
import type { Video } from "types/video";
import styles from "./VideoCard.module.css";
export type VideoProps = {
  video: Video;
};

export const VideoCard = ({
  video: { title, description, thumbnail },
}: VideoProps) => {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={thumbnail} alt={description} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
