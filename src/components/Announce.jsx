import styled from "styled-components"
import React from 'react'


const Container = styled.div`
height: 30px;
background-color: #535353;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-style: 14px;
font-weight: 500;
@media (max-width: 500px){
  display: none;
}

`
const Text = styled.h4`
color: #BDA855;
`


export default function Announce() {
    return (
        <Container>
            <Text>New Watches: ... ... ... </Text>
        </Container>
        
    )
}
