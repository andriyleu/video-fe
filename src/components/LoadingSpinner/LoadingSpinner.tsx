import { Spinner } from "react-bootstrap";

export const LoadingSpinner = () => {
  return (
    <Spinner
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
      }}
      animation="border"
      role="progressbar"
    />
  );
};
