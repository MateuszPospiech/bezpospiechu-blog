import React from 'react';

const Footer = () => (
   <div className="site-footer">
      <h4 className="text-center">
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="http://www.mateuszpospiech.pl" target="_blank" rel="noopener noreferrer">Pospiech.IT</a>
      </h4>
      <div className="footer-social-links">
         <ul className="social-links-list">
            <li>
               <a href="http://www.facebook.com/bezpospiechu-blog" className="facebook" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-facebook-f"></i>
               </a>
            </li>
            <li>
               <a href="http://www.instagram.com/zamalamasa/" className="instagram" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-instagram"></i>
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/mateusz-po%C5%9Bpiech-6b7841151/" className="linkedin" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-linkedin"></i>
               </a>
            </li>
            <li>
               <a href="https://www.youtube.com/user/0mix/" className="youtube" target="_blank" rel="noopener noreferrer">
               <i className="fab fa-youtube"></i>
               </a>
            </li>
         </ul>
      </div>
   </div>
)

export default Footer 