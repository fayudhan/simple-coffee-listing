// Di komponen Button.jsx
import React from "react";

const Button = ({ children, isActive, onClick, ...rest }) => {
  const buttonClasses = isActive
    ? "text-sm text-lightest px-[0.875rem] py-2 bg-gray rounded-xl font-semibold transition-transform transform-gpu transition duration-300 active:opacity-80"
    : "text-sm text-lightest px-[0.875rem] py-2 rounded-xl font-semibold transition-transform transform-gpu hover:opacity-80 transition duration-300 active:scale-95";

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
