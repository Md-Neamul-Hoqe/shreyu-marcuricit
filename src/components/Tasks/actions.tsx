import { ButtonGroup, Dropdown } from "react-bootstrap";
import FeatherIcons from "feather-icons-react";

const Actions = (): any => {
  return (
    <Dropdown as={ButtonGroup} className="mt-2 me-1" align="end">
      <Dropdown.Toggle variant="transparent" className="cursor-pointer">
        <FeatherIcons icon="more-vertical" className="icon-dual icon-xs me-1" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#">
          <FeatherIcons icon="edit" className="icon-dual icon-xs me-1" />
          Edit
        </Dropdown.Item>
        <Dropdown.Item href="#">
          <FeatherIcons icon="delete" className="icon-dual icon-xs me-1" />
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Actions;
