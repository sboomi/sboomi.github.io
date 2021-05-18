import React from 'react';

const Navbar = ({ fields }) => {
  return (
    <div>
      {fields.map((field, index) => (
        <div>field</div>
      ))}
    </div>
  );
};

export default Navbar;
