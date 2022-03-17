import React from 'react';
import { Link } from 'react-router-dom';

const BtnLink = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`text-xl text-white rounded-lg px-5 py-2 bg-btnActive my-3 ${className}`}
    >
      {children}
    </Link>
  );
};


export default BtnLink;