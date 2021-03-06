import PropTypes from "prop-types"
import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import DarkMode from'./DarkMode'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
      <header>
        <Navbar fixed="top" light expand="sm">
          <div className="container">
            <NavbarBrand href="/" title="BezPospiechu homepage">
            {/* <StaticQuery query={query} render={data => {
                return (
                  <Img fixed={data.file.childImageSharp.fixed } alt="BezPospiechu logo" title="BezPospiechu logo" />
                )
              }}
            /> */}
            <StaticQuery query={query} render={data => {
                return (
                  <Img className="logo" fluid={data.file.childImageSharp.fluid } alt="BezPospiechu logo" title="BezPospiechu logo" />
                )
              }}
            />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/" title="BezPospiechu strona główna">Strona główna</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/o-mnie" title="BezPospiechu o mnie">O mnie</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/tagi" title="BezPospiechu tagi">Tagi</NavLink>
                </NavItem>
                
                <NavItem>
                  <DarkMode/>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </header>
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
    file(relativePath: {eq: "bezPospiechu_logo.png"}) {
      childImageSharp {
        fixed(height: 160) {
          ...GatsbyImageSharpFixed
        }
        fluid(maxHeight: 160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

`

export default Header
