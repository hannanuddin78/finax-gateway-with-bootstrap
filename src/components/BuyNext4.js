import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const BuyNext4 = () => {
  const id = uuidv4();
  const currency = useSelector((state) => state.country.buyUserDetails);
  const history = useHistory()

  const postBuy = () => {
    const buyData = { ...currency, SwapId: id };
    console.log(buyData);
    fetch("http://localhost:5000/buy", {
      method: "POST",
      body: JSON.stringify(buyData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successfully posted");
          history.push("/");
        }
      });
  };

  return (
    <div className="container border my-5">
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
    </div>
  );
};

export default BuyNext4;
