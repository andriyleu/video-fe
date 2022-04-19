import { Alert } from "react-bootstrap";
import { EditVideoPopUp } from "components/EditVideoPopUp";
import { LoadingSpinner } from "components/LoadingSpinner";
import { VideoPlayer } from "components/VideoPlayer";
import { useFetchVideo } from "hooks/useFetchVideo";

export type VideoDetailsScreenProps = {
  id: string;
};

export const VideoDetailsScreen = ({ id }: VideoDetailsScreenProps) => {
  const { video, isLoading, isError } = useFetchVideo(id);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError || !video) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    );
  }

  return (
    <>
      <VideoPlayer video={video.attributes} />
      <EditVideoPopUp id={id} defaultValues={video.attributes} />
    </>
  );
};
