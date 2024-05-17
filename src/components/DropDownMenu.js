import React from "react";

const DropdownMenu = ({ items }) => {
  return (
    <div className="dropdown-menu">
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
