import { Card } from "react-bootstrap";

interface StatTypes {
  title?: string;
  stats?: string;
  isLeaves?: boolean;
}

const Stat = ({ title, stats, isLeaves }: StatTypes) => {
  return (
    <Card>
      <Card.Body>
        <div className="text-center mx-auto">
          <span className="text-muted text-uppercase fs-12 fw-bold">
            {title}
          </span>
          <div className="d-flex align-items-end justify-content-center">
            <h3 className="mb-0">{stats}</h3>
            {isLeaves && <span>&nbsp;Today</span>}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Stat;
