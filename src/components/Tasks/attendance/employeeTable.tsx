import { Col, Row } from "react-bootstrap";
import Table from "../../Table";
import { attendanceAdmin as data, days } from "../../../pages/tables/data";

const EmployeeTable = () => {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
      sort: true,
    },
    {
      Header: "Date",
      accessor: "date",
      sort: true,
    },
    {
      Header: "PunchIn",
      accessor: "punch_in",
      sort: true,
    },
    {
      Header: "PunchOut",
      accessor: "punch_out",
      sort: true,
    },
    {
      Header: "Break",
      accessor: "break",
      sort: true,
    },
    {
      Header: "Overtime",
      accessor: "overtime",
      sort: true,
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

  return (
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
  );
};

export default EmployeeTable;
