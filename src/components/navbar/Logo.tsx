import React from "react";
import glancefy_logo from "../../assets/glancefy_logo.svg";

function Logo() {
  return (
    <div className="logo">
      {/* <img src={glancefy_logo} alt="Glancefy Logo" height={50} width={50} /> */}
      {/* change svg color based on dark mode */}
      <img
        src={glancefy_logo}
        alt="Glancefy Logo"
        height={50}
        width={50}
        className="dark:invert"
      />
    </div>
  );
}

export default Logo;
