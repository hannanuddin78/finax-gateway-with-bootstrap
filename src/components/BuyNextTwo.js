import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import WAValidator from "wallet-address-validator";
import { getWalletAddress } from "../redux/Actions/CountryAction";

const BuyNextTwo = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  let history = useHistory();

  const isValid = () => {
    const valid = WAValidator.validate(address, "BTC");
    if (valid) {
      const walletAddress = {
        addressWallet: address,
      };
      dispatch(getWalletAddress(walletAddress));
      alert("This is a valid address");
      history.push("/buyNext3");
    } else {
      alert("Address INVALID");
    }
  };

  return (
    <Container className="border my-5">
      <div className="container p-5">
        <p>wallet : 1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck </p>
        <input
          onBlur={(e) => setAddress(e.target.value)}
          className="form-control mb-5"
          type="text"
          placeholder="Enter your BSC wallet address"
        />
        <h4>You will receive your TAOA in this address</h4>

        <h4 className="text-danger mt-5">
          Pay close attention mistakes will make you loose all your assets and there is nothing we
          can do to help
        </h4>
      </div>
      <a href="https://www.binance.org/en/smartChain" target="_blank" className="text-center">
        <h4>Don't have a BSC wallet yet?</h4>
      </a>
      <div className="text-center py-5">
        <Button variant="danger" className="px-5" onClick={isValid}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default BuyNextTwo;
