import React, { useState } from "react";
import LoginForm from "./AuthComponents/LoginForm";
import OTP from "./AuthComponents/OTP";
import Logo from "./Logo";
import {StepsTypes, UserTypes, PinType} from '../utils/types'

const Login = () => {
  const [position, setPosition] = useState<number>(0);
  const [user, setUser] = useState<UserTypes>({ email: "", password: "" });
  const [pin, setPin] = useState<PinType>("")

  const handleConfirmOTP = () => {
    console.log(pin)
  }

  const steps: StepsTypes = [
    {
      name: "Form",
      component: (
        <LoginForm
          user={user}
          setUser={setUser}
          position={position}
          setPosition={setPosition}
        />
      ),
    },
    { name: "OTP", component: <OTP pin={pin} setPin={setPin} callBack={handleConfirmOTP} /> },
  ];

  return (
    <div className="auth__section">
      <Logo className="login__brand" />
      {steps[position].component}
    </div>
  );
};

export default Login;
