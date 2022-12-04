import React from "react";
import styled from "styled-components";
import { Form, Input, FormGroup } from 'reactstrap';
import items from "../assets/data/data.json"
import nft from "../assets/data/nft.json"

function NFTComponent() {
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
  
    const results = !searchTerm
      ? nft
      : nft.filter(person =>
          person.owner.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
  
        return(
            <Container>
                <Title>Explore your NFT collection</Title>
                <Form>
                    <FormGroup>
                        <Input id="NFTname" name="firstName" placeholder="Address of the owner" value={searchTerm}
        onChange={handleChange} />
                    </FormGroup>
                </Form>
                <CardContainer>
                    {results.map(({owner, token}) => 
                    (<>
                        {token.map(({name, coord}) =>  
                        <Card>
                            <CardImage
                            style={{
                                backgroundColor: "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16)),
                            }}>
                            <CardTable>
                                {coord.slice(1, coord.length).map((item) => {
                                    return (
                                        <tr>
                                            {item.map((element) => {
                                                return(
                                                    <td style={{
                                                        backgroundColor: element,
                                                        width: "25px",
                                                        height: "25px"
                                                    }}></td>
                                                )
                                            })}
                                        </tr>
                                        );
                                })}
                            </CardTable>
                            </CardImage>
                         <CardContent>
                            <CardName>{name}</CardName>
                         </CardContent>
                         <CardIcon></CardIcon>
                        </Card>   
                        )}
                    </>))}
                </CardContainer>
            </Container>
        )
    }
export default NFTComponent;

const Title = styled.p`
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 48px;
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
    padding: 10px 0;
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
text-align: center;
`
const Card = styled.div`
display: inline-block;
margin: 10px;
width: 240px;
height: 350px;
padding: 0 10px 10px;
`
const CardImage = styled.div`
display: flex;
width: 230px;
height: 350px;
justify-content: center;
align-items: center;
border-radius: 20px;
position: absolute;
`

const CardTable = styled.div`
padding: 0 0 55px 0;
`
const CardContent = styled.div`
width: 230px;
height: 70px;
background-color: white;
position: relative;
top: 280px;
background: rgba(163, 199, 214, 0.5);
border-radius: 20px;
`

const CardName = styled.p`
position: relative;
padding: 15px 12px;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 300;
font-size: 24px;
line-height: 32px;
color: #FFFFFF;
text-align: left;
`

const CardIcon = styled.button`
top: -63px;
left: 80px;
width: 40px;
height: 40px;
background: rgba(217, 217, 217, 0.3);
position: relative;
border: none;
border-radius: 50%;
background-size: 37px;
background-repeat: no-repeat;
background-position: center 3px;
filter: #A3C7D6;
background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Ei-heart.svg/768px-Ei-heart.svg.png")`
