import React, { useState } from "react";
import LoginForm from "./LoginComponents/LoginForm";
import OTP from "./LoginComponents/OTP";
import Logo from "./Logo";

type StepsTypes = {
  name: string;
  component: JSX.Element;
}[];

type UserTypes = {
  email: string;
  password: string;
};
type PinType = string

const Login = () => {
  const [position, setPosition] = useState<number>(0);
  const [user, setUser] = useState<UserTypes>({ email: "", password: "" });
  const [pin, setPin] = useState<PinType>("")

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
    { name: "OTP", component: <OTP pin={pin} setPin={setPin} /> },
  ];

  return (
    <div className="login__section">
      <Logo className="login__brand" />
      {steps[position].component}
    </div>
  );
};

export default Login;
