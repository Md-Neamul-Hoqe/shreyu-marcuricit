import { Card } from "react-bootstrap";

// images
import cardImg from "../../../assets/images/users/avatar-7.jpg";
import Actions from "../actions";

const Employee = () => {
  return (
    <Card>
      <Card.Body className="pb-0">
        <div className="text-center mt-2">
          <img src={cardImg} alt="" className="avatar-xl rounded-circle" />
          <h4 className="mt-2 mb-0">Shreyu N</h4>
          <h6 className="text-muted fw-normal mt-2 mb-3">
            Frontend Development
          </h6>
        </div>
        <div className="position-absolute top-0 end-0 cursor-pointer">
          <Actions />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Employee;
