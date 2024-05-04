import { Form } from "react-bootstrap";

const Permissions = ({ controller, defaultChecked }) => {
  return (
    <Form.Check
      type="radio"
      defaultChecked={defaultChecked}
      id={controller}
      name={controller}
      label=""
    />
  );
};

export default Permissions;
