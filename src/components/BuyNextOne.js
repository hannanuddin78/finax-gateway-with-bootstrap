import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, SplitButton, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCountries, getSelectedCountries } from "../redux/Actions/CountryAction";

const BuyNextOne = () => {
  const [countryName, setCountryName] = useState({});
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.country.counters);
  const country = useSelector((state) => state.country.buyUserDetails.name);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  const handleChange = (e) => {
    setCountryName({ name: e });
  };

  const handleNext = () => {
    const quantityValue = document.getElementById("quantity").value;
    const select = {
      ...countryName,
      quantity: quantityValue,
    };
    console.log(select);
    dispatch(getSelectedCountries(select));
  };

  return (
    <Container className="border my-5">
      <div className="container p-5">
        <h3>Stable coin gateway - BUY</h3>
        <div className="my-5">
          <SplitButton
            key={"down"}
            id={`dropdown-button-drop-${"down"}`}
            drop={"down"}
            variant="secondary"
            title={countryName.name || country || "Select Your Coin"}
          >
            {currency.map((cr) => (
              <Dropdown.Item onSelect={handleChange} key={cr.numericCode} eventKey={cr.name}>
                {cr.name} - ( {cr.currencies[0].code})
              </Dropdown.Item>
            ))}
          </SplitButton>
        </div>
        <div>
          <label>
            <input id="quantity" type="number" placeholder="Quantity" required />
          </label>
        </div>
        <div className="mt-5">
          <h3>Total Cost @Price AOA/TAOA</h3>
        </div>
        <Link to="/buyNext2">
          <Button onClick={handleNext} variant="danger" className="px-5 mt-5 text-center">
            Next
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default BuyNextOne;
