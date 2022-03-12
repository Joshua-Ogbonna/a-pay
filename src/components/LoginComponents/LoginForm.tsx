import React from "react";
import { Input } from "@chakra-ui/react";
import Button from "../Button";
import { Link } from "react-router-dom";

type UserTypes = {
  user: { email: string; password: string };
  setUser: React.Dispatch<
    React.SetStateAction<{ email: string; password: string }>
  >;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  position: number;
};

const LoginForm = ({ user, setUser, setPosition, position }: UserTypes) => {
  const handlePosition = () => {
    setPosition(position + 1);
  };
  return (
    <div className="auth__form">
      <h3>Login</h3>
      <p>Welcome back. Login to continue with your credentials.</p>
      <div className="form">
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="hello@email.com"
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="**********"
          />
        </div>
        <div className="form__group no__account">
          <p><Link to="/recover-password">Recover password</Link></p>
          <p><Link to="/sign-uo">Sign Up</Link></p>
        </div>
        <div className="form__group">
          <Button
            text="Login"
            className="auth__button"
            callBack={handlePosition}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
