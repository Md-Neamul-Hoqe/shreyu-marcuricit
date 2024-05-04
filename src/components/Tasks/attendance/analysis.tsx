import { Card, Col, ProgressBar, Row } from "react-bootstrap";

const Analysis = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Header className="header-title">
            Timesheet <span className="text-secondary h6">11 Mar 2023</span>
          </Card.Header>
          <Card.Body>
            <div className="border rounded-box px-2">
              <h6>Punch In At</h6>
              <p className="text-secondary">Wed, 11th Mar 2023 10.00 AM</p>
            </div>
            <div
              style={{ width: 125, height: 125 }}
              className="d-flex align-items-center justify-content-center mx-auto my-3 bg-primary text-white h2 text-nowrap avatar-xl rounded-circle"
            >
              3 hrs
            </div>
            <div className="d-flex justify-content-between">
              <div className="text-center">
                <div className="">Break</div>
                <div>1.21 hrs</div>
              </div>
              <div className="text-center">
                <div className="">Overtime</div>
                <div>3 hrs</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header className="header-title">Statistics</Card.Header>
          <Card.Body>
            <ProgressBar
              variant="success"
              now={30}
              label={
                <span className="fs-12 fw-bold">
                  Your Profile is <span className="fs-11">{30}%</span> completed
                </span>
              }
              className="mb-3"
              style={{ height: "14px" }}
            />
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header className="header-title">Today Activity</Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Analysis;
