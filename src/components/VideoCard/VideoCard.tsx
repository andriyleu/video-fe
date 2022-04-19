import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
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
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.ellipsisText}>{title}</Card.Title>
        <Card.Text className={styles.ellipsisText}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
