import React from "react";
import { useNavigate } from "react-router-dom";

const Admindash = ({ setuser }) => {
  const navigate = useNavigate();
  function logout() {
    setuser(false);
    navigate("/");
  }
  return (
    <div>
      <h1>dashboard</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Admindash;
