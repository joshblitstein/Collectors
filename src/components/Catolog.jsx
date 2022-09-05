import React, { useState, Component, useEffect} from 'react'
import styled from 'styled-components'
import { collection, onSnapshot, doc, getDocs, query } from 'firebase/firestore'
import db from  '../firebase.js' 
import CategoryItem from './CategoryItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Checkout from './Checkout.jsx'

import './list.scss'



const Container = styled.div `
 //height: calc(100vh - 85px);
 width: 70% ;
 display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`






export default function Catolog({ currentData }) {
  const [active, setActive] = useState(false)
  const [toggle, setToggle] = useState(false)

 

  const history = useHistory();
  function handleNav(e) {
    console.log(e.target.parentElement.querySelector('h1').innerHTML)
    let data =  {
      postData: e.target.parentElement.querySelector('h1').innerHTML,
      
  }
      axios.post(
         `http://localhost:3002/checkout`,  //your url
      data
     
    ).then((response) => { 
    console.log(response)
    });




    history.push(`/checkout`);
  };


    
   
   
 
    return ( 

        <div style={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
            
        
     
        <Container >
           
              { currentData.map(item =>(
              <CategoryItem  key= {item.title} item={item}/>
             ))}
  
       
        </Container>
     
        </div> 

    

     
    )
}
