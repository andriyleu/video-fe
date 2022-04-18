import { Button, Form } from "react-bootstrap";

import { Video } from "types/video";
import { useForm } from "react-hook-form";

export type VideoFormProps = {
  actionTitle: string;
  defaultValues?: Video;
  onSubmit: (values: Partial<Video>) => void;
};

export const VideoForm = ({
  actionTitle,
  defaultValues,
  onSubmit,
}: VideoFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues ?? {
      title: "",
      description: "",
      isPublic: false,
      url: "",
      thumbnail: "",
    },
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          placeholder="My black cat"
          {...register("title", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          placeholder="A black cat walking in the park"
          {...register("description", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Url</Form.Label>
        <Form.Control
          placeholder=".mp4 file"
          {...register("url", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Thumbnail</Form.Label>
        <Form.Control
          placeholder=".jpg/png file"
          {...register("thumbnail", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Is public?"
          {...register("isPublic", { required: true })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionTitle}
      </Button>
    </Form>
  );
};
