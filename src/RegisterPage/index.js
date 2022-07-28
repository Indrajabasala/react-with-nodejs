import React, { useState } from "react";
import styles from "./index.css";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobileNumber: "",
  });

  const [content, setContent] = useState([]);

  let { fname = "", lname = "", email = "", mobileNumber = "" } = data;

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    setContent([...content, data]);
    setData("");
    postList();
  };

  const postList = () => {
    axios.post(`http://localhost:4000/userRegistartion`, data).then((res) => {
      console.log("dddddddddd", res.data);
    });
  };

  return (
    <div>
      <div className="content">
        <h2>Registartion Page</h2>
        <div className="pageDetilas">
          <div className="basicDetails1">
            <input
              className="input1"
              type="text"
              name="fname"
              value={fname}
              placeholder="FirstName"
              onChange={handleChange}
            />
            <input
              className="input1"
              type="text"
              name="lname"
              value={lname}
              placeholder="LastName"
              onChange={handleChange}
            />
          </div>
          <div className="basicDetails2">
            <input
              className="input1"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="input1"
              type="number"
              name="mobileNumber"
              value={mobileNumber}
              placeholder="MobileNumber"
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="button-styles" onClick={handleClick}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
