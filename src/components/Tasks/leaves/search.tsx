import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Search = () => {
  return (
    <Row className="">
      <Col md={2}>
        <FloatingLabel
          controlId="employeeName"
          label="Employee Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Employee Name" />
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <FloatingLabel controlId="floatingSelectGrid" label="Leave Type">
          <Form.Select aria-label="Floating label select example">
            <option>--select--</option>
            <option value="1">leave type 01</option>
            <option value="2">leave type 02</option>
            <option value="3">leave type 03</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <FloatingLabel controlId="floatingSelectGrid" label="Leave Status">
          <Form.Select aria-label="Floating label select example">
            <option>--select--</option>
            <option value="1">Web designer</option>
            <option value="2">Web Developer</option>
            <option value="3">Graphic Designer</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <FloatingLabel controlId="from" label="From" className="mb-3">
          <Form.Control id="from" type="date" name="date" />
        </FloatingLabel>
      </Col>
      <Col md={2}>
        <FloatingLabel controlId="to" label="To" className="mb-3">
          <Form.Control id="to" type="date" name="date" />
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
