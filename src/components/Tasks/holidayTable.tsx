import { Row, Col, Card } from "react-bootstrap";

// components
import Table from "../Table";

//dummy data
import { listOfHolidays as data } from "../../pages/tables/data";

const columns = [
  {
    Header: "ID",
    accessor: "id",
    sort: true,
  },
  {
    Header: "Title",
    accessor: "title",
    sort: true,
  },
  {
    Header: "HolidayDate",
    accessor: "holidayDate",
    sort: false,
  },
  {
    Header: "Day",
    accessor: "day",
    sort: true,
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

/* TODO: need to be pass dropdown component in this table data */
const HolidayTable = () => {
  return (
    <>
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
    </>
  );
};

export default HolidayTable;
