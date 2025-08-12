// components/ui/button.js
import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={\`px-4 py-2 rounded font-semibold transition-colors duration-200 shadow hover:shadow-md bg-primary text-white hover:bg-primary-hover \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};
