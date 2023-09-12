import React from "react";

interface Props {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: () => void;
}

const Button = ({ color = "primary", children, onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
