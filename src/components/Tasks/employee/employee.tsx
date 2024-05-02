import { Card } from "react-bootstrap";

// images
import cardImg from "../../assets/images/small/img-1.jpg";

const Employee = () => {
  return (
    <Card className="mb-4 mb-xl-0">
      <Card.Img src={cardImg} className="rounded-circle" />
      <Card.Body>
        <Card.Title as="h5" className="fs-16">
          Admin Name
        </Card.Title>
        <Card.Text className="text-muted">web designer</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Employee;
