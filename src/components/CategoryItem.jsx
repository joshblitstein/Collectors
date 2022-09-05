import styled from 'styled-components'
import React from 'react'


const Container = styled.div `
  //margin-left: 50%;
  flex: 1 0  30%;
  margin: 10px;
  height: 60vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 2px solid black;
  
`




const Image = styled.img `
padding: 20px;
width: 70%;
height: 70%;
z-index: 2;
opacity: 0.8;

transition: 1s ease;
  &:hover {
    height: 100%;
    width: 90%;
    z-index: 6;
    padding: none;
    opacity: 1;
  }
  @media (max-width: 500px){
  padding: 0px;
}
   
//object-fit: cover;
`

const Desc = styled.p`
//padding: 10%;
letter-spacing: 5px;
transition: 0.4s ease;
${Image}:hover ~ & {  
  color: transparent;
}
@media (max-width: 500px){
  letter-spacing: 0px;
}

`
const Info = styled.div `
position: absolute;
top: 0;
left: 0;
width: 150%;
height: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
const Title = styled.h1 `
font-size: 100%;
color: black;
`
const Button = styled.button `
width: 30%;
height: 6%;
`



export default function CategoryItem({item}) {
  
    return (
       <Container > 
            <Image src={item.img || item.images[0]}/>
            
              
             {/*  <Button>SHOP NOW</Button> */}
            
            <Title>{item.title}</Title>
            <Desc>{item.price}</Desc>
       </Container>
    )
}
