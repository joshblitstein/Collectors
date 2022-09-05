import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Footer from './footer/Footer'
import MobileNav from './MobileNav'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
position: relative;
height: 100vh;
width: 100vw;
display: flex;
margin-top: 5%;
//justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
`
const Paragraph = styled.p`
width: 50%;
font-size: larger;
@media (max-width: 500px){
 width: 100%;
 padding: 40px;
 height: 100vh;
}
`
const Back = styled.button`
margin-right: 300px;
margin-top: 10px;
`
const Break = styled.span`
    display: block;

`
const Smaller = styled.span`
    font-size; 10px;
    vertical-align: super;
`

export default function About() {
    const history = useHistory();

    return (
        <>
            <Navbar />
            <MobileNav/>
            <Container>
                <Back onClick={()=>history.push('/')} className='btn'>Back</Back>
                <Title>About Us</Title>
                <Paragraph>
                <Break><strong>Making watch dreams come true<Smaller>&#8482;</Smaller></strong></Break> 

Collectors Watch Concierge, located in Smithtown, New York has been in the business of buying, selling and trading high-end timepieces as well as other fine items for decades. Our pedigree and long-standing relationships have allowed us to come across a variety of unique pieces.

As one of the largest e-commerce watch dealers in the USA we separate ourselves from the competition with our customer-first approach. We always make sure to offer the best service for the best products for the best prices online. All of our inventory is in stock and ready to ship; usually, the same day payment is received. 

We are happy to offer our services and products to customers globally.

Please contact us to buy, sell, trade or consign your next high-end timepiece.
                </Paragraph>
            </Container>
            <Footer />
        </>
    )
}
