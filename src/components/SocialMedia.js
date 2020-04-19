import React from 'react';

export default class SocialMedia extends React.Component {

    render() {
        return (
            <section className="site-footer">
               <div className="footer-social-links">
                  <ul className="social-links-list">
                     <li>
                        <a href="https://www.facebook.com/bezpospiechublog" className="facebook" target="_blank" title="BezPospiechu facebook fanpage" rel="noopener noreferrer">
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
            </section>
        );
    }
}