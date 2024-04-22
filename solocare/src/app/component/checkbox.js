
import React, { useState } from 'react';

const Checkbox = ({ label, isChecked, onChange }) => {
    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleChange}
      />
      <span className={`w-[20px] h-[25px] border-[1px] border-blue-900/60 rounded-md flex items-center justify-center transition-colors duration-300 ${checked ? 'bg-blue-900' : 'bg-white'}`}>
        
      </span>
    </label>
  );
};

export default Checkbox;
