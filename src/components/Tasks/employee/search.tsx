import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Row className="">
      <Col md={3}>
        <FloatingLabel
          controlId="employeeID"
          label="Employee ID"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Employee ID" />
        </FloatingLabel>
      </Col>
      <Col md={3}>
        <FloatingLabel
          controlId="employeeName"
          label="Employee Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Employee Name" />
        </FloatingLabel>
      </Col>
      <Col md={4}>
        <FloatingLabel controlId="floatingSelectGrid" label="Designation">
          <Form.Select aria-label="Floating label select example">
            <option>Select Designation</option>
            <option value="1">Web designer</option>
            <option value="2">Web Developer</option>
            <option value="3">Graphic Designer</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col
        md={2}
        className="d-flex justify-content-end align-items-start w-full"
      >
        <Button className="form-control py-2" size="lg">
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default Search;
