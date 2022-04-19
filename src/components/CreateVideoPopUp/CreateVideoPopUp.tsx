import { Button, Modal } from "react-bootstrap";

import { VideoForm } from "components/VideoForm/VideoForm";
import { useCreateVideo } from "hooks/useCreateVideo";
import { useState } from "react";

export const CreateVideoPopUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createVideoMutation = useCreateVideo();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-plus-circle" />
        Create video
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VideoForm
            actionTitle="Create"
            onSubmit={(values) => {
              createVideoMutation.mutate(values);
              handleClose();
            }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
