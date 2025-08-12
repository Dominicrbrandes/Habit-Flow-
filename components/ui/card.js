// components/ui/card.js
import React from "react";

export const Card = ({ children, className = "", ...props }) => (
  <div className={\`rounded-xl border bg-white dark:bg-gray-800 shadow-sm p-4 \${className}\`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const CardHeader = ({ children, ...props }) => <div {...props}>{children}</div>;
export const CardTitle = ({ children, ...props }) => <h2 className="text-lg font-bold" {...props}>{children}</h2>;
