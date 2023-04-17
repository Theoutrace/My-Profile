import React from "react";
import "./WarningHeader.css";

const WarningHeader = (props) => {
  return (
    <div className="header-warning-strip-outer-contnr">
      <img src={props.icon} alt="" className="warning-icon-header-strip" />
      {props.text}
    </div>
  );
};

export default WarningHeader;
