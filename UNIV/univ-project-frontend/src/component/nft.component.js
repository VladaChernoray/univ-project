import React from "react";
import styled from "styled-components";
import { Form, Input, FormGroup, FormFeedback, Button } from 'reactstrap';
import items from "../assets/data/data.json"


export default class NFTComponent extends React.Component {
    render() {
        return(
            <Container>
                <Title>Explore your NFT collection</Title>
                <Form>
                    <FormGroup>
                        <Input id="NFTname" name="firstName" placeholder="Address of the owner" onChange={this.handleChange} />
                    </FormGroup>
                </Form>
                <CardContainer>
                    {items.map(({owner, token}) => 
                    (<Card>
                        <h1>{owner}</h1>
                        {token.map(({name, picture}) =>
                        <>
                        <h1>{name}</h1>
                        <img src={$`{picture}`}/>
                        </>)}
                    </Card>))}
                </CardContainer>
            </Container>
        )
    }
}   

const Title = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 82px;
text-align: center;
color: #A3C7D6;
display: block;
`
const Container = styled.div`
Form {
    display: flex;
    justify-content: center;
    vertical-align: center;
    align-items: center;
}
Input {
    border: 2px solid #A3C7D6;
    border-radius: 50px;
    background: rgba(0,0,0,0); 
    width: 1000px;
    height: 46px;
    margin-bottom: 10px;
}
Input::placeholder {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 31px;
    color: #FFFFFF;
}
Input:valid{
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 31px;
    color: #FFFFFF;
    background: rgba(0,0,0,0); 
    padding: 0 0 0 25px; 
}
`
const CardContainer = styled.div`
`
const Card = styled.div`
`