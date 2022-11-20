import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.nav`
text-align: center;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 41px;
text-align: center;
color: #A3C7D6;
text-decoration: none;
`
const Container = styled.div`
`
export class LogoComponent extends React.Component{
    render() {
        return(
        <Container>
            <Link to={`/main`}><LogoContainer>CuberCube</LogoContainer></Link>
        </Container>
        )
    }


}