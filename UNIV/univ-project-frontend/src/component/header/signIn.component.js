import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const SignInContainer = styled.nav`
  .nav-item {
    display: inline;
  }
  .nav-link {
    position: relative;
    font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
    list-style: none;
    text-decoration: none;
    color: #A3C7D6;
    padding: 0 30px;
  }
`
const SignUpButton = styled.button`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
text-decoration: none;

box-sizing: border-box;
background: rgba(0,0,0,0); 
width: 128px;
height: 45px;
color:#A3C7D6;
border: 2px solid #A3C7D6;
border-radius: 50px;
`

export class SignInComponent extends React.Component{

    render() {
        return (
            <SignInContainer>
                <nav className= 'navbar'>
                    <ul>
                        <li className= 'nav-item'>
                            <Link className='nav-link'> Sign in</Link>
                        </li>
                        <li className= 'nav-item'>
                          <Link to={`/sign_up`}>
                          <SignUpButton className='nav-links'>Sign up</SignUpButton>
                          </Link>
                        </li>
                    </ul>
                </nav>
            </SignInContainer>
        )
    }
}