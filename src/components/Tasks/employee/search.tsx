import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Row className="">
      <Col md={3}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label className="d-hidden" column hidden htmlFor="employeeID">
            Text
          </Form.Label>
          <Col lg={12}>
            <Form.Control
              type="text"
              size="lg"
              id="employeeID"
              placeholder="Employee ID"
            />
          </Col>
        </Form.Group>
      </Col>
      <Col md={3}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label
            className="d-hidden"
            column
            hidden
            lg={2}
            htmlFor="employeeName"
          >
            Text
          </Form.Label>
          <Col lg={12}>
            <Form.Control
              type="text"
              size="lg"
              id="employeeName"
              placeholder="Employee Name"
            />
          </Col>
        </Form.Group>
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
        <Button className="form-control" size="lg">
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default Search;
