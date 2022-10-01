import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
margin-left: 4rem;
`;

const Menu = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: center;
margin-right: 4rem;
`;

const MenuItem = styled.li`
margin: 0 1rem;
`;

const Navbar = () => {
  return (
    <Section>
      <Logo><h1>SharkTank</h1></Logo>
      <Menu>
        <Link to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/feed">
          <MenuItem>Posts</MenuItem>
        </Link>
      </Menu>
    </Section>
  );
};

export default Navbar;
