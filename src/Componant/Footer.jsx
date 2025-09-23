import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center mt-10">
      <p>
        © {new Date().getFullYear()} 
        <span className="text-white font-semibold"> ClassStack</span>. 
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
