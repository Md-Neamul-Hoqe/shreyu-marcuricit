import { Row, Col } from "react-bootstrap";

// components
import Stat from "./stat";

const Stats = ({ stats }: { stats: any }) => {
  return (
    <div>
      <Row>
        {stats?.map((stat: any, idx: number) => (
          <Col key={idx} sm={6} xl={3}>
            <Stat
              title={stat.title}
              stats={stat.stats}
              isLeaves={stat?.isLeaves}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Stats;
