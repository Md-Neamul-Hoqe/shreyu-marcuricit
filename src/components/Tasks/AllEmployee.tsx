// components

import { Col, Row } from "react-bootstrap";

import Employee from "./employee/employee";

const AllEmployees = () => {
  return (
    <Row>
      {Array(10)
        .fill(1)
        .map((project, i) => {
          return (
            <Col xl={4} md={6} key={i}>
              <Employee />
            </Col>
          );
        })}
    </Row>
  );
};

export default AllEmployees;
