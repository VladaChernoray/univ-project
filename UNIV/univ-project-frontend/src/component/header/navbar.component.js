import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'
const NavbarContainer = styled.nav`
  .nav-item {
    display: inline;
  }
  .nav-links {
    position: relative;
    font-family: 'Rajdhani';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 31px;
/* identical to box height */

text-align: center;

color: #A3C7D6;

    list-style: none;
    text-decoration: none;
    font-size: 16px;

    padding: 0 15px;
  }
`

export class NavbarComponent extends React.Component{
    render() {
        return (
            <NavbarContainer>
                <nav className= 'navbar'>
                    <ul>
                        <li className= 'nav-item'>
                            <Link to= '/' className='nav-links link-hover'>GamePlay</Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to= '/' className='nav-links link-hover'>NFT</Link>
                        </li>
                    </ul>
                </nav>
            </NavbarContainer>
        )
    }
}