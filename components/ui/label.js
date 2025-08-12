// components/ui/label.js
import React from "react";

export const Label = ({ children, htmlFor, className = "", ...props }) => (
  <label htmlFor={htmlFor} className={\`block font-medium text-sm text-gray-700 dark:text-gray-300 \${className}\`} {...props}>
    {children}
  </label>
);
