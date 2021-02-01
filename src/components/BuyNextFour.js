import React from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BuyNextFour = () => {
  // create a new instance swap id unique
  const id = uuidv4();

  // get user all select data with redux store
  const currency = useSelector((state) => state.country.buyUserDetails);

  // go select page link when needed users
  const history = useHistory();

  // get server api and post all data in mongoDb server when function postBuy click
  // buyCoinDataWithMaterial
  const postBuy = () => {
    const buyData = { ...currency, SwapId: id };
    console.log(buyData);
    fetch("https://finex-getway-server-api.herokuapp.com/buyCoinDataWithBootStrap", {
      method: "POST",
      body: JSON.stringify(buyData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successfully Posted Data in MongoDB Server");
          history.push("/");
        }
      })
      .catch((error) => {
        alert("not post server", error.message);
      });
  };

  return (
    <Container className="border my-5">
      <div className="container p-5">
        <h4 className="my-5">Transfers funds to the following account</h4>
        <div className="my-5">
          <h3>IBAN: {currency.AccountNumber}</h3>
          <h3>Swap ID: {id}</h3>
        </div>
        <h4>
          As soon as the funds are received the transaction to your BSC wallet will be made the
          following address.
        </h4>
        <h4 className="my-5">{currency.addressWallet}</h4>
        <a href="#" className="text-center">
          <h4>Doubts? Discord or Telegram</h4>
        </a>
        <div className="text-center">
          <Button variant="danger" className="px-5 mt-5 " onClick={postBuy}>
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default BuyNextFour;
