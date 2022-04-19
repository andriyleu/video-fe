import { Alert, Spinner } from "react-bootstrap";

import type { NextPage } from "next";
import { VideoDetailsScreen } from "screens/VideoDetailsScreen";
import { useRouter } from "next/router";

const VideoDetails: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <VideoDetailsScreen id={id} />;
};

export default VideoDetails;
