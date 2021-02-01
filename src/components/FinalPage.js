import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const FinalPage = () => {
  return (
    <Container className="border my-5">
      <div className="container p-5">
        <h4 className="my-5">
          Congratulations you have made it successfully. Remember your internal transaction ID. If
          you need any help customer support will ask for it
        </h4>
        <h1>334235</h1>
        <h4 className="my-5">ID X, qtt token, Token, timestamp</h4>
        <Link to="/">
          <Button variant="success"> I've stored the ID and go home page</Button>
        </Link>
      </div>
    </Container>
  );
};

export default FinalPage;
