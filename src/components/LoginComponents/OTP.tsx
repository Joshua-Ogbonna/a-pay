import React from "react";
import { Input } from "antd";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

interface OTPProps {
  pin: string;
  setPin: React.Dispatch<React.SetStateAction<string>>;
}

const OTP = ({ pin, setPin }: OTPProps) => {
  const navigate = useNavigate();

  const handleConfirmOTP = () => {
    console.log("Pin Confirmed");
    navigate("/dashboard");
  };

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
            callBack={handleConfirmOTP}
          />
        </div>
      </div>
    </div>
  );
};

export default OTP;
