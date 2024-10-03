import React from "react";
import "./toggle.css";

// Define the props interface
interface ToggleButtonProps {
  value: boolean; // Current state of the toggle (true/false)
  handleClick: () => void; // Function to handle toggle clicks
  disabled?: boolean; // Optional prop to disable the toggle
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  handleClick,
  disabled = false,
}) => {
  return (
    <div className={disabled ? "disabled-div" : ""}>
      <label
        className={`toggle-label cursor-pointer ${
          value ? "checked-on" : "checked-off"
        }`}
        onClick={disabled ? undefined : handleClick} // Disable click if 'disabled' is true
      >
        <input
          className="toggle-input"
          readOnly
          type="checkbox"
          checked={value}
          onClick={(e) => e.stopPropagation()}
        />
        <span
          className={`toggle-span ${value ? "checked-on" : "checked-off"}`}
        />
      </label>
    </div>
  );
};

export default ToggleButton;
