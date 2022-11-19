import React from "react";
import styled from "styled-components";
import { LanguageComponent } from "./language.component";

const LogoContainer = styled.nav`
text-align: center;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 41px;
text-align: center;

color: #A3C7D6;

`
export class LogoComponent extends React.Component{
    render() {
        return(
            <>
              <LogoContainer>CuberCube</LogoContainer>
            </>
        )
    }


}