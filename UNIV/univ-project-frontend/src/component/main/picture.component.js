import React from "react";
import styled from 'styled-components'
import Logo from '../main/pic.png';

const PictureContainer = styled.div`
padding: 0 25px;
`
const Picture = styled.img`
width: 390px;
height: 390px;
object-fit: cover;
border-radius: 30px;`

export class PictureComponent extends React.Component {
    render() {
        return(
            <PictureContainer>
                  <Picture src={Logo} alt="React Logo" />
            </PictureContainer>
        )
    }
}