import { Card, CardHeader, CardBody, Row, Col ,Label} from "reactstrap";
import react from "react";
function CustomerCard({ title, lables }) {
  return (
    <Card className="shadow-lg" style={{ padding: "32px" }}>
      <CardHeader style={{ fontWeight: 600, fontSize: "32px" }}>
        {title}
      </CardHeader>
      <CardBody>
        {lables.map((item, i) => (
          <div key={i}>
            <Row className="justify-content-between">
              <Col>
                <Label className="subtitle" style={{ marginRight: "48px" }}>
                  {item.lable}
                </Label>
              </Col>
              <Col>
                <Label className="title" style={{ marginRight: "48px" }}>
                  {item.value}
                </Label>
              </Col>
            </Row>
          </div>
        ))}
      </CardBody>
    </Card>
  );
}

export default CustomerCard;
