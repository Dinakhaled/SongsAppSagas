import React, {useState} from "react";
import { Modal } from 'react-bootstrap';

const ModalBootstrap = (props) => {
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="danger" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.content}</Modal.Body>
        <Modal.Footer>
          {props.action}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBootstrap;