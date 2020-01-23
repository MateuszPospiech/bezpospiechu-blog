import PropTypes from "prop-types"
import React, { useState } from 'react';

import Img from 'gatsby-image'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
      <div>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="/">
              <img src="../images/bezPospiechu.png" alt="BezPospiechu blog" srcset="../images/bezPospiechu.png"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {/* <NavItem>
                  <NavLink href="/team">Team</NavLink>
                </NavItem> */}
                <NavItem>
                  <NavLink href="/tags">Tagi</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">O mnie</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
