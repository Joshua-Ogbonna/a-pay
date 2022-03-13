import React from "react";

interface ButtonProps {
  className: string;
  text: string;
  callBack?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, text, callBack }: ButtonProps) => {
  return (
    <div>
      <button className={className} onClick={callBack}>
        {text}
      </button>
    </div>
  );
};

export default Button;
