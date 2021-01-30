import React from 'react'
import { useState } from 'react';
import {Dropdown, SplitButton, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalBank } from '../actions/CountryAction';

const BuyNext3 = () => {
    const dispatch = useDispatch();
     const [selectedBank, setSelectedBank] = useState("Chose Your Bank");
     var number = function () {
       // Math.random should be unique because of its seeding algorithm.
       // Convert it to base 36 (numbers + letters), and grab the first 9 characters
       // after the decimal.
       return "ABCDEFG" + Math.random().toString(36).substr(2, 9).toUpperCase();
     };
     var AccNum = number();
     const handleChange = (e) => {
      const localBank = {
        bank: e,
        AccountNumber: AccNum,
      };
      dispatch(getLocalBank(localBank));
      setSelectedBank(e);
     };
     return (
       <div className="container border my-5">
         <div className="container p-5">
           <div className="my-5">
             <SplitButton
               key={"down"}
               id={`dropdown-button-drop-${"down"}`}
               drop={"down"}
               variant="secondary"
               title={selectedBank}
             >
               <Dropdown.Item onSelect={handleChange} eventKey={"Local Bank1"}>
                 Local Bank1
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleChange} eventKey={"Local Bank2"}>
                 Local Bank2
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleChange} eventKey={"Local Bank3"}>
                 Local Bank3
               </Dropdown.Item>
               <Dropdown.Item onSelect={handleChange} eventKey={"Local Bank4"}>
                 Local Bank4
               </Dropdown.Item>
             </SplitButton>
           </div>
           <h5 className="mb-5">
             Transfers between banks are usually faster. If available give preference to your local
             bank and the system will automatically find the best P2P for you.
           </h5>
           <a className="ml-5">
             <h5>How long does it usually take?</h5>
           </a>
           <Link to="/buyNext4">
             <Button variant="danger" className="px-5 mt-5 text-center">
               Next
             </Button>
           </Link>
         </div>
       </div>
     );
}

export default BuyNext3
