import type { NextPage } from "next";
import { Spinner } from "react-bootstrap";
import { VideosList } from "components/VideosList";
import { useFetchVideosList } from "hooks/useFetchVideosList";

const Home: NextPage = () => {
  const { videos, isLoading, error } = useFetchVideosList();

  if (isLoading) {
    return <Spinner animation="border" />;
  }

  if (error || !videos) {
    return <span>An error has ocurred!</span>;
  }

  return <VideosList videos={videos.data} />;
};

export default Home;
