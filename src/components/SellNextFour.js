import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SellNextFour = () => {
  const history = useHistory();
  const token = useSelector((state) => state.sellUser.sellUserDetails.token);
  const allData = useSelector((state) => state.sellUser.sellUserDetails.token);
  const [txId, setTxId] = useState("");

  const postSell = () => {
    const sellData = { ...allData, txId };
    fetch("https://finex-getway-server-api.herokuapp.com/sellCoinDataWithBootStrap", {
      method: "POST",
      body: JSON.stringify(sellData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("Successful");
          history.push("/finalPage");
        }
      });
  };
  return (
    <Container className="border my-5">
      <div className="container p-5">
        <h4 className="my-5">
          Transfer your tokens {token} to the following BSN (Biance smart chain) address and enter
          the result in a TXid
        </h4>
        <h4>0xd215423aAd24dA82f782eA845aeD269E621</h4>
        <input
          type="text"
          className="form-control my-5"
          placeholder="TXid (mandatory info)"
          onBlur={(e) => setTxId(e.target.value)}
        />
        <Button variant="danger" onClick={postSell}>
          Done
        </Button>
      </div>
    </Container>
  );
};

export default SellNextFour;
