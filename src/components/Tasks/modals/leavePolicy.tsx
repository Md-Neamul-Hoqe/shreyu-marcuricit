import { ReactChildren } from "react";
import { Button, Modal } from "react-bootstrap";

const LeavePolicy = ({
  show,
  handleClose,
  title,
  children,
}: {
  show: boolean;
  handleClose: any;
  title: string;
  children: ReactChildren;
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header onHide={handleClose} closeButton>
        <Modal.Title as="h5">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LeavePolicy;
