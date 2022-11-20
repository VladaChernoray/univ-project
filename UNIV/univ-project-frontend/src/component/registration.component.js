import React, { Component } from 'react';
import { Form, Input, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail } from 'validator';
import styled from 'styled-components';
import Image from '../assets/images/img2.jpg'

export default class RegisterComponent extends Component {

    state = {
        isChecked: false,
      }
    
      toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;
    
        this.setState(({ isChecked }) => (
          {
            isChecked: !isChecked,
          }
        ));
    
        handleCheckboxChange(label);
      }
    
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState = () => ({
        data: {
            nickName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {}
    });

    handleChange = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            errors: {
                ...this.state.errors,
                [e.target.name]: ''
            }
        });
    }

    validate = () => {
        const { data } = this.state;
        let errors = {};

        if (data.nickName === '') errors.lastName = 'Nickname can not be blank.';
        if (!isEmail(data.email)) errors.email = 'Email must be valid.';
        if (data.email === '') errors.email = 'Email can not be blank.';
        if (data.password === '') errors.password = 'Password must be valid.';
        if (data.confirmPassword !== data.password) errors.confirmPassword = 'Passwords must match.';

        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { data } = this.state;

        const errors = this.validate();

        if (Object.keys(errors).length === 0) {
            console.log(data);
            this.setState(this.getInitialState());
        } else {
            this.setState({ errors });
        }
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;
        const { data, errors } = this.state;
        return (
            <Container>
                 <Picture src={Image} alt="React Registration" />
                 <Form onSubmit={this.handleSubmit}>
                    <FormTitle>Start now</FormTitle>
                    <FormDescription>Create a account in CuberCube and claim a free armor set  to start your game</FormDescription>
                <FormGroup>
                    <Input id="nickName" value={data.firstName} invalid={errors.firstName ? true : false} name="firstName" placeholder="Nickname" onChange={this.handleChange} />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input id="email" value={data.email} invalid={errors.email ? true : false} name="email" placeholder="Email" onChange={this.handleChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input id="password" value={data.password} type="password" name="password" invalid={errors.password ? true : false} placeholder="Password" onChange={this.handleChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Input id="confirmPassword" value={data.confirmPassword} type="password" name="confirmPassword" invalid={errors.confirmPassword ? true : false} placeholder="Confirm Passward"onChange={this.handleChange} />
                    <FormFeedback>{errors.confirmPassword}</FormFeedback>
                </FormGroup>
                <Checkbox>
                    <label>
                        <input
                        type="checkbox"
                        value={label}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}/>
                        <CheckboxText>
                        I config that I am in legal age, I have read and agree the Service Agreemant.
                        </CheckboxText>
                    </label>
                </Checkbox>
                <ButtonContainer>
                    <ButtonMetaMask></ButtonMetaMask>
                    <ButtonCreate>CREATE A FREE ACCOUNT</ButtonCreate>
                </ButtonContainer>
            </Form>
        </Container>
        );
    }
}

const Container = styled.div`
display: flex;
justify-content: space-around;
vertical-align: center;
align-items: center;

Form {
    width: 480px;

}
Input {
    border: 2px solid #A3C7D6;
    border-radius: 50px;
    background: rgba(0,0,0,0); 
    width: 440px;
    height: 48px;
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
FormFeedback {
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
}
`
const ButtonCreate = styled.button`
    width: 284px;
    height: 46px;
    background: linear-gradient(270deg, #AD5389 0%, #3C1053 100%);
    border-radius: 20px;
    border: none;
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    `
const Checkbox = styled.div`
input{
    width: 35px;
    height: 35px;
    border: 2px solid #A3C7D6;
    border-radius: 10px;
}
label{
    font-family: 'Rajdhani';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
}
`
const CheckboxText = styled.p`
padding: 0 0 0 20px;`
const Picture = styled.img`
width: 450px;
height: 450px;
border-radius: 20px;
`
const FormTitle = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 700;
font-size: 66px;
line-height: 64px;
text-align: center;
color: #A3C7D6;
`
const FormDescription = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 21px;
line-height: 31px;
color: #FFFFFF;
`
const ButtonMetaMask = styled.button`
width: 71px;
height: 45px;

background: #A3C7D6;
border: 1px solid #000000;
border-radius: 50px;
background-size: contain;
background-repeat: no-repeat;
background-position: center center;
background-image:url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/240px-MetaMask_Fox.svg.png")
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 10px 0;
`