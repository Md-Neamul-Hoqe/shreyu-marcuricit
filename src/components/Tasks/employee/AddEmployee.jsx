import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import FeatherIcons from "feather-icons-react";
import LeavePolicy from "../modals/leavePolicy";
import Table from "../../Table";
import { AddEmployeeInfo as data } from "../../../pages/tables/data";

const columns = [
  {
    Header: "Module Permission",
    accessor: "module_permission",
    sort: false,
  },
  {
    Header: "Read",
    accessor: "read",
    sort: false,
  },
  {
    Header: "Write",
    accessor: "write",
    sort: false,
  },
  {
    Header: "Create",
    accessor: "create",
    sort: false,
  },
  {
    Header: "Delete",
    accessor: "delete",
    sort: false,
  },
  {
    Header: "Import",
    accessor: "import",
    sort: false,
  },
  {
    Header: "Export",
    accessor: "export",
    sort: false,
  },
];

const sizePerPageList = [
  {
    text: "5",
    value: 5,
  },
  {
    text: "10",
    value: 10,
  },
  {
    text: "25",
    value: 25,
  },
  {
    text: "All",
    value: data.length,
  },
];

const AddEmployee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex justify-content-end pb-3">
      <Button type="button" onClick={handleShow}>
        <FeatherIcons
          icon="plus"
          className="icon-dual text-white icon-xs me-1"
        />
        Add Employee
      </Button>

      <LeavePolicy show={show} handleClose={handleClose} title="Add Employee">
        <Form>
          {/* name */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="firstName"
                column
                md={3}
              >
                First Name<span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name"
              />
            </Col>
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="lastName"
                column
                md={3}
              >
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
            </Col>
          </Form.Group>

          {/* username, email */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="username"
                column
                md={3}
              >
                Username <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </Col>
            <Col md={6}>
              <Form.Label className="text-nowrap" htmlFor="email" column md={3}>
                Policy Name <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </Col>
          </Form.Group>

          {/* password */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="password"
                column
                md={3}
              >
                Password
              </Form.Label>
              <Form.Control
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </Col>
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="confirmPassword"
                column
                md={3}
              >
                Confirm Password
              </Form.Label>
              <Form.Control
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </Col>
          </Form.Group>

          {/* Employee ID, joining date */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="EmployeeID"
                column
                md={3}
              >
                Employee ID <span className="text-warning">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="EmployeeID"
                id="EmployeeID"
                placeholder="EmployeeID"
              />
            </Col>
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                column
                lg={3}
                htmlFor="joiningDate"
              >
                Joining Date <span className="text-warning">*</span>
              </Form.Label>
              <Form.Group as={Row}>
                <Col>
                  <Form.Control id="joiningDate" type="date" name="date" />
                </Col>
              </Form.Group>
            </Col>
          </Form.Group>

          {/* Phone, company */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label className="text-nowrap" htmlFor="Phone" column md={3}>
                Phone
              </Form.Label>
              <Form.Control
                type="tel"
                name="Phone"
                id="Phone"
                placeholder="Phone"
              />
            </Col>
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="company"
                column
                md={3}
              >
                Company
              </Form.Label>
              <Form.Select
                id="company"
                className="mb-2"
                aria-label="large select example"
              >
                <option defaultValue="0">Select Company</option>
                <option value="1">Company 1</option>
                <option value="2">Company 2</option>
                <option value="3">Company 3</option>
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Department, Designation */}
          <Form.Group as={Row} className="mb-3">
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="Department"
                column
                md={3}
              >
                Department <span className="text-warning">*</span>
              </Form.Label>
              <Form.Select id="Department" aria-label="large select example">
                <option defaultValue="0">Select</option>
                <option value="1">Web development</option>
                <option value="2">Database management</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label
                className="text-nowrap"
                htmlFor="Designation"
                column
                md={3}
              >
                Designation <span className="text-warning">*</span>
              </Form.Label>
              <Form.Select id="Designation" aria-label="large select example">
                <option defaultValue="0">Select</option>
                <option value="1">Web designer</option>
                <option value="2">Web Developer</option>
                <option value="3">Database manager</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <hr />

          <Row>
            <Col>
              <Table
                columns={columns}
                data={data}
                pageSize={data.length}
                sizePerPageList={sizePerPageList}
                isSortable={false}
                pagination={false}
                isSearchable={false}
              />
            </Col>
          </Row>
        </Form>
      </LeavePolicy>
    </div>
  );
};

export default AddEmployee;
