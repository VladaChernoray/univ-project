import React from "react";
import styled from 'styled-components'
import { PictureComponent } from "./picture.component";
import TitleComponent from "./title.component";

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

export default class MainComponent extends React.Component {
    render() {
        return (
            <Container>
                <MainContainer>
                    <TitleComponent/>
                    <PictureComponent/>
                </MainContainer>
            </Container>

        );
    }
}
