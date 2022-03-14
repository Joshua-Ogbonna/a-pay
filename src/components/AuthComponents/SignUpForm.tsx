import React from "react";
import { Input } from "antd";
import Button from "../Button";
import { UserInput } from "../../utils/types";

const SignUpForm = ({ user, setUser, position, setPosition }: UserInput) => {
  const handleSignUp = () => {
    console.log(user);
    setPosition(position + 1);
  };
  return (
    <div className="auth__form">
      <h3>Sign Up</h3>
      <p>Get started for a seamless payment experience</p>
      <div className="form__group">
        <label htmlFor="email">Email Address</label>
        <Input
          type="email"
          size="large"
          placeholder="hello@email.co"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="userID">User ID</label>
        <Input
          type="text"
          size="large"
          placeholder="john_doe"
          value={user.userID}
          onChange={(e) => setUser({ ...user, userID: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="password">Choose Passcode</label>
        <Input
          type="password"
          size="large"
          placeholder="****"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="confirm passcode">Confirm Passcode</label>
        <Input
          type="password"
          size="large"
          placeholder="****"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
      </div>
      <div className="form__group">
        <Button
          className="auth__button"
          text="Sign Up"
          callBack={handleSignUp}
        />
      </div>
    </div>
  );
};

export default SignUpForm;
