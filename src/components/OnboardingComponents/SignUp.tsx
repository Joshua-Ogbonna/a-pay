import React, { useState } from "react";
import OTP from "../AuthComponents/OTP";
import SignUpForm from "../AuthComponents/SignUpForm";
import Logo from "../Logo";
import { StepsTypes, PinType, UserTypes } from "../../utils/types";

const SignUp = () => {
  const [position, setPosition] = useState(0);
  const [pin, setPin] = useState<PinType>("");
  const [user, setUser] = useState<UserTypes>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleConfirmOTP = () => {
      console.log(pin)
  }

  const steps: StepsTypes = [
    {
      name: "Sign Up Form",
      component: (
        <SignUpForm
          user={user}
          setUser={setUser}
          position={position}
          setPosition={setPosition}
        />
      ),
    },
    { name: "Confirm OTP", component: <OTP pin={pin} setPin={setPin} callBack={handleConfirmOTP} /> },
  ];

  return (
    <div className="auth__section">
      <Logo className="login__brand" />
      {steps[position].component}
    </div>
  );
};

export default SignUp;
