import React from "react";

function Header(props) {
  return (
    <div>
      <img className="circle-img" src={props.img} alt="passport ID" />
    </div>
  );
}

export default Header;
