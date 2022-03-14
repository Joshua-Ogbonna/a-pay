import React from "react";
import { Input } from "antd";
import Button from "../Button";
import { Link } from "react-router-dom";
import {UserInput} from '../../utils/types'

const LoginForm = ({ user, setUser, setPosition, position }: UserInput) => {
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
            size="large"
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="**********"
            size="large"
          />
        </div>
        <div className="form__group no__account">
          <p><Link to="/recover-password">Recover password</Link></p>
          <p><Link to="/sign-up">Sign Up</Link></p>
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
