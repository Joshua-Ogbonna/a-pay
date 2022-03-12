import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <Link to="/">
        <i className="fa-brands fa-confluence"></i>
        <h5>a-pay</h5>
      </Link>
    </div>
  );
};

export default Logo;
