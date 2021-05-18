import React from 'react';

const Navbar = ({ fields }) => {
  return (
    <div>
      {fields.map((field, index) => (
        <div>
          <a href={field.url}>{field.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
