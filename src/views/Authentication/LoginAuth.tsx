import React from "react";
import Login from "../../components/Login";
import SignSide from "../../components/SignSide";

const LoginAuth = () => {
  return (
    <div className="auth__container">
      <div className="auth__component">
        <Login />
      </div>
      <div className="side__component">
        <SignSide />
      </div>
    </div>
  );
};

export default LoginAuth;
