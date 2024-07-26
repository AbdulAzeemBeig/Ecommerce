import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingInfo } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { useNavigate } from "react-router-dom";
import "../pages/shipping.css";

const Shipping = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address || "");
  const [city, setCity] = useState(shippingInfo.city || "");
  const [state, setState] = useState(shippingInfo.state || "");
  const [country, setCountry] = useState(shippingInfo.country || "");
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode || "");
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo || "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/confirmOrder");
  };

  return (
    <div className="shippingContainer">
      <CheckoutSteps activeStep={0} />
      <div className="shippingBox">
        <h2 className="shippingHeading">Shipping Details</h2>
        <form className="shippingForm" onSubmit={submitHandler}>
          <div>
            <label>Address</label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label>Pin Code</label>
            <input
              type="number"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div>
            <label>Phone No</label>
            <input
              type="number"
              required
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
          <button type="submit" className="shippingBtn" onClick={submitHandler}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
