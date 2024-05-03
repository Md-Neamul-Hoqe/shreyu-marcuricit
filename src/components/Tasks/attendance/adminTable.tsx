import { Col, Row } from "react-bootstrap";
import Table from "../../Table";
import { attendanceAdmin as data, days } from "../../../pages/tables/data";

const AdminTable = () => {
  const columns = [
    {
      Header: "Employee",
      accessor: "employee.img",
      sort: false,
    },
    {
      Header: "",
      accessor: "employee.name",
      sort: true,
    },
    ...days,
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

export default AdminTable;
