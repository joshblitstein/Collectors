import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Footer from './footer/Footer';
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit, } from 'firebase/firestore'
import db from  '../firebase.js'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import $ from 'jquery'



const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: white;
position: relative;
display: flex;
margin-top: 5%;
justify-content: center;
align-content: center;

`
const ImgCont = styled.img`
height: 70%;
width: 25%;
left: 0;
`
const InfoDiv = styled.div`
height: 100%;
width: 50%;
//bottom: 0;
background-color: white;
//border: 1px solid black;
//position: relative;
//left: 25%;
//margin-top: 20%;
`
export default function CheckoutCopy({stuff}) {
 
    const [loading, setLoading] = useState(true)
   console.log(stuff)

   function ifLaoding(){
   
   }
    useEffect(() => {
        if(stuff.length > 0){
      
            setLoading(false)
            
        }
   }, [stuff])
   
    return (
        <> 
         <Navbar />
      <Container>
     
        {!loading ? <ImgCont src={stuff[0].img}/>: 'loading...' }
        <InfoDiv>
            <h1>{!loading ? stuff[0].title: 'loading...'}</h1>
            <h1>{!loading ? stuff[0].price: 'loading...'}</h1>
            <button>CONTACT TO PURCHASE</button>
            <div>
            <button>CALL</button>
            <button>EMAIL</button>
            <button>TRADE IN</button>
            </div>
            <div>
                <h3>Brand:</h3>
                <h3>Model:</h3>
                <h3>Reference Number:</h3>
                <h3>Serial Number:</h3>
                <h3>Gender:</h3>
                <h3>Metal:</h3>
                <h3>Case Size:</h3>
                <h3>Wrist Size:</h3>
                <h3>Movement:</h3>
                <h3>Crystal:</h3>
                <h3>Dial:</h3>
                <h3>Bezel:</h3>
                <h3>Band:</h3>
                <h3>Box:</h3>
                <h3>Papers:</h3>
                <h3>Era:</h3>
                <h3>Condition:</h3>
            </div>
        </InfoDiv>
      </Container>
          <Footer/> 
        
        </>
        )
}
