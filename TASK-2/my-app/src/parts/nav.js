import React from "react";
import Button from "@material-ui/core/Button";
import "./nav.css";
const nav = ({ onButtonSubmit }) => {
  return (
    <nav className="navbar">
      <h3 className="compname">Sagar Dance Academy</h3>
      <div className="getuserbtn">
        <Button variant="outlined" onClick={onButtonSubmit} color="secondary">
          Get Users
        </Button>
      </div>
    </nav>
  );
};
export default nav;
