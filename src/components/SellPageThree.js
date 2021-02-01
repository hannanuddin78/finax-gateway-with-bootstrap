import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getSellDataAll } from "../redux/Actions/SellAction";

const SellPageThree = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Container className="border my-5">
      <div className="container p-5">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your IBAN account details to be credited"
          onBlur={(e) => dispatch(getSellDataAll(e.target.value))}
        />
        <div className="mt-5">
          <a href="#">
            <h4>Where can I find my IBAN</h4>
          </a>
          <Button variant="danger" onClick={() => history.push("/sellNextFour")}>
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SellPageThree;
