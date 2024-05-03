import { Form } from "react-bootstrap";

const status = {
  options: [
    { value: "new", label: "New" },
    { value: "pending", label: "Pending" },
    { value: "approved", label: "Approved" },
    { value: "declined", label: "declined" },
  ],
  selected: "new",
};

const Status = ({ selected }: { selected: any }) => {
  status.selected = selected;
  return (
    <Form.Select defaultValue={status.selected} aria-label="leaves status">
      {status.options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </Form.Select>
  );
};

export default Status;
