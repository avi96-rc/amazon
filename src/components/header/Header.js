import React from "react";
import styled from "styled-components";
import logo from "./../../assets/logo.webp";
import Options from "./Options";
import SearchBar from "./SearchBar";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <>
    <StyledNav>
      <img src={logo} alt="logo" />
      <SearchBar />
      <Options />
    </StyledNav>
    <SubHeader/>
    </>

  );
};

export default Header;

const StyledNav = styled.nav`
  background-color: rgba(19, 25, 33);
  /* border: 1px solid red; */
  /* height: 100px; */
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-between;

  img {
    height: 40px;
    /* border: 1px solid white; */
    /* flex-grow: 1; */
    /* margin-right: 20px; */
  }
`;
