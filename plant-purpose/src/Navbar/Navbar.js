import React from "react";
import styled from "styled-components";
import { greenPea } from "../Styles/colors";
import { bone } from "../Styles/colors";
import { trout } from "../Styles/colors";
import logo from "../logo.svg";
import "../App.css";

const NavbarStyled = styled.div`
  background-color: white;
  position: relative;
  width: 100%;
  height: 96px;
  left: 0px;
  top: 0px;
`;

export const SignUpButton = styled.div`
  color: white;
  width: 94px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  background-color: ${greenPea};
  position: absolute;
  left: 82.78%;
  right: 10.69%;
  top: 33.33%;
  bottom: 29.17%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  justify-content: center;
`;

export const SignInButton = styled.div`
  color: ${trout};
  width: 94px;
  height: 36px;
  border-radius: 4px;
  text-align: center;
  background-color: ${bone};
  position: absolute;
  top: 33.33%;
  bottom: 29.17%;
  left: 74.58%;
  right: 18.89%;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: 0.08em;
  justify-content: center;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <img src={logo} className="Plant-logo" alt="logo" />
      <SignInButton>Sign In</SignInButton>
      <SignUpButton>Sign Up</SignUpButton>
    </NavbarStyled>
  );
}

{
  /* <img src={logo} className="App-logo" alt="logo" /> */
}
