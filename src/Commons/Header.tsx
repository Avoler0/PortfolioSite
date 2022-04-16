import { useEffect, useState } from "react";
import { Link, useLocation, useMatch, useParams } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const path = useLocation().pathname;
  
  // useEffect(()=>{
  //   setPath(window.location.pathname)
  // },[window.location.pathname])
  return (
    <Wrap>
      <Logo>

      </Logo>
      <Nav>
        <NavItem>
          <Items><Link to="/" style={ path === "/" ? {borderBottom: '2px solid #06BC9B'} : {borderBottom: 'none'}} >Home</Link></Items>
          <Items><Link to="/about" style={ path === "/about"  ? {borderBottom: '2px solid #06BC9B'} : {borderBottom: 'none'}}>About</Link></Items>
          <Items><Link to="/portfolio" style={ path === "/portfolio"  ? {borderBottom: '2px solid #06BC9B'} : {borderBottom: 'none'}}>Portfolio</Link></Items>
          <Items><Link to="/blog" style={ path === "/blog" ? {borderBottom: '2px solid #06BC9B'} : {borderBottom: 'none'}}>Blog</Link></Items>
        </NavItem>
      </Nav>

    </Wrap>
  );
}

const Wrap = styled.div`
  width: 1280px;
  height: 5.5rem;
  background-color: #d6cbcb;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const Logo = styled.div`
  width: 8rem;
  height: 100%;
  background-color: blue;

`;
const Nav = styled.nav`
  padding: 10px;
`;
const NavItem = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Items = styled.li`
  font-size: 24px;
  a{
    float: right;
    text-decoration: none;
    padding-bottom: 0.4rem;
    margin-left: 1.5rem;
    color: #8370707f;
    
  }
  
`;

const Util = styled.div`
  width: 20%;
  background-color: green;
`;
export default Header;