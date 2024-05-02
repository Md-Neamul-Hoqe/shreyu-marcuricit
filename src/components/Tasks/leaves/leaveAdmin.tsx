import { Row, Col, Card } from "react-bootstrap";

// components
import Table from "../../Table";

//dummy data
import { leavesOfAdmin as data } from "../../../pages/tables/data";

const columns = [
  {
    Header: "Employee",
    accessor: "employee.img",
    sort: true,
  },
  {
    Header: "",
    accessor: "employee.name",
    sort: true,
  },
  {
    Header: "Leave Type",
    accessor: "leave_type",
    sort: true,
  },
  {
    Header: "From",
    accessor: "from",
    sort: false,
  },
  {
    Header: "To",
    accessor: "to",
    sort: true,
  },
  {
    Header: "No Of Days",
    accessor: "no_of_days",
    sort: false,
  },
  {
    Header: "Reason",
    accessor: "reason",
    sort: false,
  },
  {
    Header: "Status",
    accessor: "status",
    sort: false,
  },
  {
    Header: "Action",
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

const LeaveAdmin = () => {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Body>
            <Table
              columns={columns}
              data={data}
              pageSize={5}
              sizePerPageList={sizePerPageList}
              isSortable={true}
              pagination={true}
              isSearchable={false}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LeaveAdmin;
