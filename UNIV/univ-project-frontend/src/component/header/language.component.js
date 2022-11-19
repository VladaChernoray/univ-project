import React from "react";
import styled from 'styled-components'

const LanguageContainer = styled.div`
`
const LanguageButton = styled.button`
width: 67px;
height: 45px;
left: 299.87px;
top: 45.4px;
border: 2px solid #A3C7D6;
border-radius: 50px;
transform: rotate(-0.34deg);
background: rgba(0,0,0,0); 
color:#A3C7D6;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
text-align: center;
`

export class LanguageComponent extends React.Component {
    render() {
        return(
            <LanguageContainer>
                <LanguageButton>ENG</LanguageButton>
            </LanguageContainer>
        )
    }
}