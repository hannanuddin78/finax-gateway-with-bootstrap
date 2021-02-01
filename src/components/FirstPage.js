import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FirstPage = () => {
    return (
      <Container>
        <Row className="border my-5 text-center">
          <Col style={{ paddingBottom: "50px" }}>
            <Row>
              <Col style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                <h1>Welcome To Our Finex Company</h1>
              </Col>
            </Row>
            <Row>
              <Col style={{ paddingBottom: "30px" }}>
                <h4>
                  Buy Coins Finex... <a href="/buyNext1">Click here</a>
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>
                  Sell Coins Finex... <a href="/sellPageOne">Click here</a>
                </h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
}

export default FirstPage
