import { Alert } from "react-bootstrap";
import { CreateVideoPopUp } from "components/CreateVideoPopUp";
import { LoadingSpinner } from "components/LoadingSpinner";
import { VideosList } from "components/VideosList";
import { useFetchVideosList } from "hooks/useFetchVideosList";

export const VideosListScreen = () => {
  const { videos, isLoading, error } = useFetchVideosList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !videos) {
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      </Alert>
    );
  }

  return (
    <>
      <CreateVideoPopUp />
      <VideosList videos={videos} />
    </>
  );
};
