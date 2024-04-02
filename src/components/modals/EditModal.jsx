import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function EditModal({ title, message, handler }) {
  const [show, setShow] = useState(true); // Initially show the modal

  const handleClose = () => {
    setShow(false);
    handler(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Save</Button>
        <Button variant="light" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
