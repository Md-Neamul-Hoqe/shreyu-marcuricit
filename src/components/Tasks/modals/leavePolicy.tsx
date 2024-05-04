import { ReactChildren } from "react";
import { Button, Modal } from "react-bootstrap";

interface LeavePolicyProps {
  show: boolean;
  handleClose: any;
  title: string;
  children: ReactChildren;
}

const LeavePolicy = ({
  show,
  handleClose,
  title,
  children,
}: LeavePolicyProps) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
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
