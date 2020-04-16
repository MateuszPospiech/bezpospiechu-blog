import React from 'react';

const Footer = () => (
   <div className="site-footer">
      <div className="text-center">
          © {new Date().getFullYear()}, Created by
          {` `}
          <a href="https://mateuszpospiech.pl" target="_blank" title="Mateusz Pośpiech portfolio" rel="noopener noreferrer">Pospiech.IT</a>
      </div>
      <div className="footer-social-links">
         <ul className="social-links-list">
            <li>
               <a href="https://www.facebook.com/bezpospiechu-blog" className="facebook" target="_blank" title="BezPospiechu facebook fanpage" rel="noopener noreferrer">
               <i className="fab fa-facebook-f"></i>
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/zamalamasa/" className="instagram" target="_blank" title="Mateusz Pośpiech instagram zamalamasa" rel="noopener noreferrer">
               <i className="fab fa-instagram"></i>
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/mateusz-po%C5%9Bpiech-6b7841151/" className="linkedin" target="_blank" title="Mateusz Pośpiech linkedin" rel="noopener noreferrer">
               <i className="fab fa-linkedin"></i>
               </a>
            </li>
            <li>
               <a href="https://www.youtube.com/user/0mix/" className="youtube" target="_blank" title="Mateusz Pośpiech YouTube" rel="noopener noreferrer">
               <i className="fab fa-youtube"></i>
               </a>
            </li>
         </ul>
      </div>
   </div>
)

export default Footer 