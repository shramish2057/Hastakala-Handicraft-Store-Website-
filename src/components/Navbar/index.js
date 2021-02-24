import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Hastakala</NavLink>
        <NavIcon onClick={toggle}>
          <p>Store</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
