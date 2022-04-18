import { Alert, Spinner } from "react-bootstrap";

import { EditVideoPopUp } from "components/EditVideoPopUp";
import type { NextPage } from "next";
import { VideoPlayer } from "components/VideoPlayer";
import { useFetchVideo } from "hooks/useFetchVideo";
import { useRouter } from "next/router";

const VideoDetails: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { video, isLoading, isError } = useFetchVideo(id);

  if (isLoading) {
    return <Spinner animation="border" />;
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

export default VideoDetails;
