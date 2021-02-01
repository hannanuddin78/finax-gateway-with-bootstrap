import React from "react";
import { Button, Container, Dropdown, SplitButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getSelectedToken } from "../redux/Actions/SellAction";

const SellPageOne = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.sellUser.sellUserDetails.token);
  console.log(token);
  const history = useHistory();
  const handleChange = (e) => {
    dispatch(getSelectedToken(e));
  };

  const handleNextOne = () => {
    const newQuantity = document.getElementById("Quantity").value;
    console.log(typeof newQuantity, newQuantity);
    history.push("/sellNextTwo");
  };
  return (
    <Container className="border my-5">
      <div className="container">
        <h4> Stablecoin gateway - Sell</h4>
        <SplitButton
          key={"down"}
          id={`dropdown-button-drop-${"down"}`}
          drop={"down"}
          variant="secondary"
          title={token || "Choose a token"}
          className="my-5"
        >
          <Dropdown.Item onSelect={handleChange} eventKey={"token1"}>
            token1
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token2"}>
            token2
          </Dropdown.Item>
          <Dropdown.Item onSelect={handleChange} eventKey={"token3"}>
            token3
          </Dropdown.Item>
        </SplitButton>
        <div>
          <label>
            <input id="Quantity" type="number" placeholder="Quantity" />
          </label>
        </div>
        <div className="mt-5">
          <h3>You will get X AOA @Preco AOA/TAOA</h3>
        </div>
        <Button onClick={handleNextOne} variant="danger" className="px-5 my-5 text-center">
          Next
        </Button>
      </div>
    </Container>
  );
};

export default SellPageOne;
