import React from "react";
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import Logo from '../assets/images/img1.png'
import { Link } from "react-router-dom";

export default class MainComponent extends React.Component {
    render() {
        return (
            <Container>
                <MainContainer>
                    <TitleContainer>
                        <Title>Discover, Play, Collect and Sell Extraordinary NFT’s</Title>
                        <ButtonContainer>
                            <Button>LET`S EXPLORE</Button>
                            <HowItWorksButton>
                                <Icon className="button-icon" icon="fa-regular:play-circle" color="#a3c7d6" width="35" />
                                <ButtonName>How it works?</ButtonName>
                            </HowItWorksButton>
                        </ButtonContainer>
                        <ButtonContainer>
                            <Link to={`/download`}>
                            <DownloadButton>DOWNLOAD</DownloadButton>
                            </Link>
                        </ButtonContainer>
                    </TitleContainer>
                    <PictureContainer>
                        <Picture src={Logo} alt="React Logo" />
                    </PictureContainer>
                </MainContainer>
            </Container>

        );
    }
}

const TitleContainer = styled.div`
width: 600px;
`
const Title = styled.div`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #FFFFFF;
`
const Button = styled.button`
display: inline;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
width: 174px;
height: 46px;   
box-sizing: border-box;
background: linear-gradient(270deg, #AD5389 0%, #3C1053 100%);
border-radius: 20px;
border: none;
`
const ButtonContainer = styled.div`
padding: 10px 0; 
width: 600px;
display: inline-block;
text-align: center;
`
const DownloadButton = styled.button`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
text-align: center;

color: #A3C7D6;

box-sizing: border-box;
background: rgba(0,0,0,0); 
width: 172px;
height: 45px;
left: 359px;
top: 551px;
border: 2px solid #A3C7D6;
border-radius: 50px;
`
const HowItWorksButton = styled.div`
 padding: 0 10px;
 display: inline;
 box-sizing: border-box;
 position: relative;
 .button-icon {
    display: inline-block;
    text-align: center;
    position: absolute;
    top: -10px;
 }
 `
const ButtonName = styled.p`
 display: inline;
 padding: 0 0 0 50px;
 font-family: 'Rajdhani';
 font-style: normal;
 font-weight: 600;
 font-size: 20px;
 line-height: 26px;
 text-align: center;
 color: #FFFFFF;
 `

const MainContainer = styled.header`
  align-items: center;
  font-family: 'Raleway', sans-serif;
  display: flex;
  align-items: center;
  vertical-align: center;
  justify-content: space-around;
  padding: 25px 80px;
  position: relative;
  z-index: 100;
`
const Container = styled.div`
  display: block;
  padding: 30px 0;
  margin: 0;
  width: 100%;
`
const PictureContainer = styled.div`
padding: 0 25px;
`
const Picture = styled.img`
width: 390px;
height: 390px;
object-fit: cover;
border-radius: 30px;`
