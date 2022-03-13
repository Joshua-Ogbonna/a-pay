import React from "react";
import { Input } from "antd";
import Button from "../Button";

interface OTPProps {
  pin: string;
  setPin: React.Dispatch<React.SetStateAction<string>>;
  callBack?: React.MouseEventHandler<HTMLButtonElement>
}

const OTP = ({ pin, setPin, callBack }: OTPProps) => {

  return (
    <div className="auth__form">
      <h3>Confirm OTP</h3> <p>Confirm otp sent to your phone</p>
      <div className="form">
        <div className="form__group">
          <label htmlFor="Confirm OTP">Confirm OTP</label>
          <Input
            placeholder="Confirm OTP"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            size="large"
          />
        </div>
        <div className="form__group">
          <Button
            text="Confirm OTP"
            className="auth__button"
            callBack={callBack}
          />
        </div>
      </div>
    </div>
  );
};

export default OTP;
