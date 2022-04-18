import { Button, Modal } from "react-bootstrap";

import { Video } from "types/video";
import { VideoForm } from "components/VideoForm/VideoForm";
import { useEditVideo } from "hooks/useEditVideo";
import { useState } from "react";

export type EditVideoPopUpProps = {
  id: string;
  defaultValues: Video;
};

export const EditVideoPopUp = ({ id, defaultValues }: EditVideoPopUpProps) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateVideoMutation = useEditVideo(id);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="bi bi-pen" />
        Edit video
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VideoForm
            actionTitle="Edit"
            defaultValues={defaultValues}
            onSubmit={(values) =>
              updateVideoMutation.mutate(values, {
                onSuccess: () => handleClose(),
              })
            }
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
