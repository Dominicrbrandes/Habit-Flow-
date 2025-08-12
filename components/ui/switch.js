// components/ui/switch.js
import React from "react";

export const Switch = ({ checked, onCheckedChange, className = "", ...props }) => {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={\`w-10 h-6 rounded-full transition-colors \${checked ? 'bg-blue-600' : 'bg-gray-400'} \${className}\`}
      {...props}
    >
      <div className={\`w-4 h-4 bg-white rounded-full shadow transform transition-transform \${checked ? 'translate-x-5' : 'translate-x-1'}\`} />
    </button>
  );
};
