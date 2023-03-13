import React from "react";

interface Props {
  text: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

function Button(props: Props) {
  const { text, variant } = props;
  const btnStyle =
    variant === "primary"
      ? "bg-primary-1 text-black font-medium px-4 py-2 rounded-md hover:animate-pulse"
      : " text-white font-medium px-4 py-2 rounded-md hover:border-white hover:border-2 transition duration-300 ease-in";
  return <button className={btnStyle}>{text}</button>;
}

export default Button;
