import PropTypes from "prop-types"
import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby'

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
            <StaticQuery query={query} render={data => {
                return (
                  <Img fixed={data.file.childImageSharp.fixed } />
                )
              }}
            />
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

export const query = graphql`
  query {
    file(relativePath: {eq: "bezPospiechu.png"}) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }

`

export default Header
