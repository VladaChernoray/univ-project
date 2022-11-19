import React from "react";
import styled from 'styled-components'
import { LanguageComponent } from "./language.component";
import { LogoComponent } from "./logo.component";
import {NavbarComponent} from "./navbar.component";
import { SignInComponent } from "./signIn.component";


const HeaderContainer = styled.header`
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  list-style: none;
  padding: 25px 80px;
  position: relative;
  z-index: 100;

`
const Container = styled.div`
  padding: 10px 0 0;
  margin: 0;
  display: block;
  width: 100%;
`

export class HeaderComponent extends React.Component {
    render() {
        return (
            <Container>
                <HeaderContainer>
                    <LogoComponent/>
                    <LanguageComponent/>
                    <NavbarComponent/>
                    <SignInComponent/> 
                </HeaderContainer>
            </Container>

        );
    }
}


export default HeaderComponent;