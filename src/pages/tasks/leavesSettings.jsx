import { Card, Col, Form, Row } from "react-bootstrap";

const LeavesSettings = () => {
  return (
    <Card className="rounded-md bg-white form-horizontal p-2 bg-white">
      <Card.Body>
        <h4 className="header-title mt-0">Annual</h4>
        <Row>
          <Col md={6}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column lg={2} htmlFor="days">
                Days
              </Form.Label>
              <Col lg={10}>
                <Form.Control
                  type="text"
                  id="days"
                  name="days"
                  placeholder="Days"
                />
              </Col>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column lg={4} htmlFor="days">
                Carry forward
              </Form.Label>
              <Col lg={8}>
                <Form.Control
                  type="text"
                  id="days"
                  name="days"
                  placeholder="Days"
                />
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LeavesSettings;
