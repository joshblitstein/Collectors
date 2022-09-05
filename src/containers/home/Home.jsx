import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Announce from '../../components/Announce'
import Navbar from '../../components/Navbar'
import Slider from '../../components/Slider'
import Watches from '../../components/watches'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import MobileNav from '../../components/MobileNav'






const Border = styled.div`
margin-top: 10px;
height: 20px; 
background-color: black;
z-index: auto;
position: absolute;
z-index: 8;
`
const Title = styled.h1 `
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    //border: 2px solid black;
    position: relative;
    //center
    background-color: black;
    //margin-left: 42%;
    z-index: 8;
    border: 1px solid black;
    margin-left: 5%;
    margin-right: 5%;
    @media (max-width: 500px){
    display: none;
    }
`
const Button = styled.button`
    background-color: black;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
    }
    @media (max-width: 500px){
    display: none;
    }
`

export default function Home({ data }) {
    const history = useHistory();
    function handleOnSubmit() {
        history.push(`/categories`);
      };
    return (
       <div>
           <Announce />
           <Navbar />
           <Slider />
           <Title>Just Arrived</Title>
           <MobileNav />
           <Watches />
           <Button onClick={handleOnSubmit}>View All</Button>
           <Footer />
       </div>
    )
}
