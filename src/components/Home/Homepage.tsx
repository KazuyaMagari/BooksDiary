import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Homepage() {
    const [isLogined, setisLogined] = useState<boolean>(false);
    const [isSignuped, setisSignuped] = useState<boolean>(false);
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col md={8} className="text-center">
          <h1 style={{ fontSize: "3rem", color: "white" , textAlign: "center",  marginTop: "10rem"}} className="mb-4">Books</h1>
            <p style={{fontSize:"1.5rem", color:"white", marginBottom: "2rem"}}>読書記録をつけて、感想を共有し、読書仲間とつながろう。
              あなたの読書体験をより豊かにするSNSプラットフォーム</p>
            {isLogined ? "" : <Button variant="primary" className="mx-4" style={{width: "6rem", height: "4rem"}}>SignUp</Button>}
            {isSignuped ? "" : <Button variant="danger" className="mx-4" style={{width: "6rem", height: "4rem"}}>Login</Button>}
        </Col>
      </Row>
    </Container>
  );
}

export default Homepage