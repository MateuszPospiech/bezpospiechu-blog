import React from 'react';

const Footer = () => (
   <div className="site-footer">
      <h4 className="text-center">
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="http://www.mateuszpospiech.pl" target="_blank" rel="noopener noreferrer">Pospiech.IT</a>
      </h4>
   </div>
)

export default Footer 