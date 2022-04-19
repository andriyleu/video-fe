import { Button, Form } from "react-bootstrap";

import { Video } from "types/video";
import styles from "./VideoForm.module.css";
import { useForm } from "react-hook-form";

export type VideoFormProps = {
  actionTitle: string;
  defaultValues?: Video;
  onSubmit: (values: Partial<Video>) => void;
};

const EMPTY_VALUES = {
  title: "",
  description: "",
  isPublic: false,
  url: "",
  thumbnail: "",
  slug: "",
};

export const VideoForm = ({
  actionTitle,
  defaultValues,
  onSubmit,
}: VideoFormProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: defaultValues ?? EMPTY_VALUES,
  });

  const onValidValuesSubmitted = (values: Partial<Video>) => onSubmit(values);

  return (
    <Form onSubmit={handleSubmit(onValidValuesSubmitted)}>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>
          Title
          <Form.Control
            placeholder="My black cat"
            {...register("title", { required: true })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>
          Description
          <Form.Control
            placeholder="A black cat walking in the park"
            {...register("description", { required: true })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>
          Url
          <Form.Control
            placeholder=".mp4 file"
            {...register("url", { required: true })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>
          Slug
          <Form.Control
            placeholder="Slug"
            {...register("slug", { required: true })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className={styles.label}>
          Thumbnail
          <Form.Control
            placeholder=".jpg/png file"
            {...register("thumbnail", { required: true })}
          />
        </Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Is public?"
          {...register("isPublic", { required: false })}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {actionTitle}
      </Button>
    </Form>
  );
};
