import {
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import FeatherIcons from "feather-icons-react";
import LeavePolicy from "../../components/Tasks/modals/leavePolicy";
import { useState } from "react";
import Actions from "../../components/Tasks/actions";
import Table from "../../components/Table";

// demo data
const data = [
  {
    id: 1,
    name: "5 years service",
    day: 4,
    assignee: "Md. Neamul Hoqe",
    action: <Actions />,
  },
];

const columns = [
  {
    Header: "Name",
    accessor: "name",
    sort: true,
  },
  {
    Header: "Day",
    accessor: "day",
    sort: true,
  },
  {
    Header: "Assignee",
    accessor: "assignee",
    sort: true,
  },
  {
    Header: "",
    accessor: "action",
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

const LeavesSettings = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="rounded-md bg-white form-horizontal p-2 bg-white mt-3">
        <Card.Body>
          <h4 className="header-title mt-0">Annual</h4>
          <Row>
            <Col md={12} lg={6}>
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
            <Col md={12} lg={6}>
              <Form.Group as={Row} className="d-flex align-items-center">
                <Form.Label column lg={4} htmlFor="days">
                  Carry forward
                </Form.Label>
                <Col lg={3} className="d-flex ms-2 ms-lg-0">
                  <Form.Check
                    type="radio"
                    className="me-1"
                    id="default-radio1"
                    name="days"
                    label="No"
                  />
                  <Form.Check
                    type="radio"
                    id="default-radio2"
                    name="days"
                    label="Yes"
                    defaultChecked
                  />
                </Col>
                <Col lg={5} className="mt-2 mt-lg-0">
                  <Form.Label htmlFor="max" visuallyHidden>
                    Max
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-secondary text-white">
                      Max
                    </InputGroup.Text>
                    <Form.Control id="max" placeholder="" />
                  </InputGroup>
                </Col>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group as={Row} className="d-flex align-items-center">
              <Form.Label column lg={4} htmlFor="earn">
                Earned leave
              </Form.Label>
              <Col lg={3} className="d-flex ms-2 ms-lg-0">
                <Form.Check
                  type="radio"
                  className="me-1"
                  id="earn1"
                  name="earn"
                  label="No"
                  defaultChecked
                />
                <Form.Check type="radio" id="earn2" name="earn" label="Yes" />
              </Col>
            </Form.Group>
          </Row>
          <Row>
            <Col xs={6}>
              <h6>Custom policy</h6>
            </Col>
            <Col xs={6} className="d-flex justify-content-end">
              <Button type="button" onClick={handleShow}>
                <FeatherIcons
                  icon="plus"
                  className="icon-dual text-white icon-xs me-1"
                />{" "}
                Add custom policy
              </Button>

              <LeavePolicy
                show={show}
                handleClose={handleClose}
                title="Add custom policy"
              >
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="policyName" column md={3}>
                      Policy Name <span className="text-red">*</span>
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="text"
                        name="policyName"
                        id="policyName"
                        placeholder="Enter policy"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="days" column md={3}>
                      Days <span className="text-red">*</span>
                    </Form.Label>
                    <Col md={9}>
                      <Form.Control
                        type="days"
                        name="days"
                        id="days"
                        placeholder="days placeholder"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label htmlFor="assignee" column md={3}>
                      Add employee
                    </Form.Label>
                    <Col md={9}>
                      <FloatingLabel
                        controlId="assignee"
                        label="Select an assignee"
                      >
                        <Form.Select aria-label="Floating label select example">
                          <option>Select an assignee</option>
                          {["Md. Neamul Hoqe", "Abdulloh", "Ahsan"].map(
                            (assignee, idx) => (
                              <option key={idx} value={assignee}>
                                {assignee}
                              </option>
                            )
                          )}
                        </Form.Select>
                      </FloatingLabel>
                    </Col>
                  </Form.Group>
                </Form>
              </LeavePolicy>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={false}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default LeavesSettings;
