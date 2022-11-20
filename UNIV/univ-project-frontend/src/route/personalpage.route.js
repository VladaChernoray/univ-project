import React from "react";
import HeaderComponent from "../component/header/header.component";
import styled from 'styled-components'

const Container = styled.div`
background-color: #190837;
overflow-x: hidden;
padding: 0 40px;
`


export default class PersonalPageRoute extends React.Component {
    render() {
        return(
            <Container>
                <HeaderComponent/>
            </Container>
        )
    }
}