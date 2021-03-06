import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const DarkMode = () =>{
   return(
      <ThemeToggler>
         {({ theme, toggleTheme }) => (
            <div className="toggleWrapper">
               <input 
                  type="checkbox" 
                  className="dark-mode" 
                  id="dark-mode"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
               />
               <label htmlFor="dark-mode" className="toggle">
                  <span className="toggle__handler">
                  <span className="crater crater--1"></span>
                  <span className="crater crater--2"></span>
                  <span className="crater crater--3"></span>
                  </span>
                  <span className="star star--1"></span>
                  <span className="star star--2"></span>
                  <span className="star star--3"></span>
                  <span className="star star--4"></span>
                  <span className="star star--5"></span>
                  <span className="star star--6"></span>
               </label>
            </div>
         )}
      </ThemeToggler>
   )
}

export default DarkMode