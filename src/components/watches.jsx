import React, { useState, Component, useEffect} from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categories} from '../data'
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit, } from 'firebase/firestore'
import db from  '../firebase.js' 
import Checkout from './Checkout'
import { useHistory } from 'react-router-dom'



const Container = styled.div `
    position: relative;
    display: flex;
    padding: 50px;
    justify-content: space-between;
    flex: 1;
    margin-left: 10%;
    margin-right: 10%;
    //border: 2px solid black;
    @media (max-width: 500px){
    padding: 0px;
    margin-left: 0%;
      display: none;
}
   
`




 

export default function Watches({ watches }) {
  const [data, setData] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])
  const [data4, setData4] = useState([])
  const [info, setInfo] = useState('')
  const [newData, setNewData] = useState('')
  const [toggle, setToggle] = useState(false)



  async function getMoreData(){
    let currenArr = []
      let q = query(collection(db, "wacthes"), where('title', '==',    info))
      const current = await getDocs(q)
      current.forEach(doc => {
        currenArr.push(doc.data()) 
      })
      setNewData(currenArr)
      
     
     
}
  




  //-------------------------------------------------------
 async function getData() {     
 let arr = []                        
 const q = query(collection(db, "Data"), orderBy('order'));            
 const querySnapshot = await getDocs(q)
 querySnapshot.forEach(doc => {
   arr.push(doc.data())
 })
 let newArr = [arr[arr.length-1], arr[arr.length-2], arr[arr.length-3]]
 let newArr2 = [arr[arr.length-4], arr[arr.length-5], arr[arr.length-6]]
 let newArr3 = [arr[arr.length-7], arr[arr.length-8], arr[arr.length-9]]
 let newArr4 = [arr[arr.length-10], arr[arr.length-11], arr[arr.length-12]]
 setData(newArr.reverse())
 setData2(newArr2.reverse())
 setData3(newArr3.reverse())
 setData4(newArr4.reverse())
 }
 //-------------------------------------------------------
 useEffect(() => { 
   getData();
   getMoreData();
 }, [info]); 
 //-------------------------------------------------------


 const history = useHistory();

function handleClick(e){
localStorage.setItem('data',e.target.parentElement.querySelector('h1').innerHTML)
history.push('/checkout')

}
 console.log(info, newData)
    return ( 
      <>
    {  !toggle ? <>
      
      <Container onClick={handleClick}>
        
            { data.map(item =>(
            <CategoryItem item={item}/>
           ))}

      </Container>
      <Container onClick={handleClick}>
        
            { data2.map(item =>(
            <CategoryItem item={item}/>
           ))}

      </Container>
      <Container onClick={handleClick}>
        
            { data3.map(item =>(
            <CategoryItem item={item}/>
           ))}

      </Container>
      <Container onClick={handleClick}>
        
            { data4.map(item =>(
            <CategoryItem item={item}/>
           ))}

      </Container>
      </>:
      <div>
      <Checkout />
      </div>}
      </>
    )
            
}
