import React from "react";
import SignUp from "../../components/OnboardingComponents/SignUp";
import SignSide from "../../components/SignSide";

const SignUpAuth = () => {
  return (
    <div className="auth__container">
      <div className="auth__component">
        <SignUp />
      </div>
      <div className="side__component">
        <SignSide />
      </div>
    </div>
  );
};

export default SignUpAuth;
