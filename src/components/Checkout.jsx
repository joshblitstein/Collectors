import React, {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Footer from './footer/Footer';
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit, SnapshotMetadata } from 'firebase/firestore'
import db from  '../firebase.js'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import $ from 'jquery'
import Paypal from './Paypal'
import './checkut.scss'
import './slideshow.scss'
import { ArrowLeftOutlined, ArrowRightOutlined, Check } from '@material-ui/icons'
import CategoryItem from './CategoryItem';

//import ImageGallery from 'react-image-gallery';


const Container = styled.div`
height: 100vh;
width: 100vw;
background-color: white;
position: relative;
display: flex;
margin-top: 5%;
justify-content: center;
align-content: center;
@media (max-width: 500px){
flex-direction: column;
padding: 50px;
justify-content: center;
align-items: center;
margin-top: 40%;
}

`
const ContainerTwo = styled.div`
height: 70vh;
width: 100vw;
margin-top: 5%;
background-color: white;
position: relative;
display: flex;
overflow: hidden;
//margin-top: 5%;
justify-content: center;
align-content: center;
flex-direction: column;
@media (max-width: 500px){
display: none;
}

`
const ImgCont = styled.img`
height: 70%;
//width: 25%;
left: 0;
margin-bottom: 5px;
@media (max-width: 500px){
height: 100%;
width: 100%;

}
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
//margin-right: 10px;
`

const InfoContainer = styled.div`
/* display: none;
background-color: green;
height: 70vh;
width: 50vw; */
display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #ffffff; /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
justify-content: center;
align-items: center;
flex-direction: column;
flex: 1 1 auto;


`
const Content = styled.li`
  margin-top: 10%auto;
  background-color: #fefefe;
  margin: 1% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* Could be more or less, depending on screen size */
  //height: 80%;
 
`

const Close = styled.button`
position: absolute;
color: black;
float: right;
font-size: 28px;
font-weight: bold;
left: 10%;
top: 10%; 
`

const Back = styled.button`
left: 0;
position: absolute;
color: black;
background-color: '#BDA855';
`
const ImgsCont = styled.div`
width: 80%;
height: 100%;
background-color: white;
bottom: 2;
display: flex;
flex-direction: column;
align-items: center;
//position: fixed;
`
const Bar = styled.div`
  background-color: white;
  height: 10%;
  width: 50%
  //margin-top: 5px
`
const Imgs =styled.img`
  width: 25%;
  height: 100%;
  flex: 1;
  background-color: white;
  //border: solid black .1px;
  margin: 2px;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
cursor: pointer;
background-color: #BDA855; 
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;

opacity: 0.5;
margin: auto;
transition: 1s ease;
&:hover{
opacity: 1;
}
z-index: 2;
@media (max-width: 500px){
  display: none;
}
`

export default function Checkout({title, title2}) {
    const [data, setData] = useState([])
    const [dataTwo, setDataTwo] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState('')
    const [toggle, setToggle] = useState(false)
    const [twenty, setTwenty] = useState(false)
    const [src, setSrc] = useState('')
    const [current, setCurrent] = useState(0)
    const [contact, setContact] = useState(false)
    
    const refference = useRef('')
    const history = useHistory()
    console.log(title2)
    async function getData(){
        let currenArr = []
          let q = query(collection(db, "Data"), where('title', '==',  title || info || localStorage.getItem('data')))
          const current = await getDocs(q)
          current.forEach(doc => {
        
            let data = {
                title: doc.data()['title'],
                price: doc.data()['price'],
                info: doc.data()['Additional Info'], 
                band: doc.data()['Band'],
                bezel: doc.data()['Bezel'],
                box: doc.data()['Box'],
                brand: doc.data()['Brand'],
                caseSize: doc.data()['Case Size'],
                condition: doc.data()['Condition'],
                crystal: doc.data()['Crystal'],
                dial: doc.data()['Dial'],
                era: doc.data()['Era'],
                gender: doc.data()['Gender'],
                guarentee: doc.data()['Guarantee'],
                metal: doc.data()['Metal'],
                model: doc.data()['Model'],
                movement: doc.data()['Movement'],
                papers: doc.data()['Papers'],
                ref: doc.data()['Reference Number'],
                serialNum: doc.data()['Serial Number'],
                wristSize: doc.data()['Wrist Size'],
                images: doc.data()['images'],
                order: doc.data()['order'],
               
            }
          //  console.log(data)
            setData(data)
           // currenArr.push(doc.data()) 
          })
         // setData(currenArr)
          setLoading(false)
         
          
    }
    async function getDataTwo(){
        let currenArr = []
          let q = query(collection(db, "Data"))
          const current = await getDocs(q)
         
          current.forEach(doc => {
        
            let data = {
                title: doc.data()['title'],
                price: doc.data()['price'],
                info: doc.data()['Additional Info'],
                band: doc.data()['Band'],
                bezel: doc.data()['Bezel'],
                box: doc.data()['Box'],
                brand: doc.data()['Brand'],
                caseSize: doc.data()['Case Size'],
                condition: doc.data()['Condition'],
                crystal: doc.data()['Crystal'],
                dial: doc.data()['Dial'],
                era: doc.data()['Era'],
                gender: doc.data()['Gender'],
                guarentee: doc.data()['Guarantee'],
                metal: doc.data()['Metal'],
                model: doc.data()['Model'],
                movement: doc.data()['Movement'],
                papers: doc.data()['Papers'],
                ref: doc.data()['Reference Number'],
                serialNum: doc.data()['Serial Number'],
                wristSize: doc.data()['Wrist Size'],
                images: doc.data()['images'],
                order: doc.data()['order'],
               
            }
           
          //  console.log(data)
            currenArr.push(data)
           // currenArr.push(doc.data()) 
          })
          let newArr = []
          for(let i = 0 ; i < 4; i++){
            let num =  Math.floor(Math.random() * currenArr.length)
            newArr.push(currenArr[num])
          }
          setDataTwo(newArr)
         // setData(currenArr)
          setLoading(false)
         
          
    }

    function getInt(string){
      let newString =  string.replace(/^\D+/g, '').replace('USD', '')
      return parseFloat(newString.replace(',', ''))
    } 
    useEffect(() => {
        getData()
        getDataTwo()
       
        if(!loading){
          if(getInt(data.price) > 25000){
            setTwenty(true)
          }
        }
    }, [title, title2, loading, info])
   /*  $('body').click(function(e){
   
      if(e.target.innerHTML == document.querySelector('button.sc-dQoVA').innerHTML){
      
      console.log(e.target);
      setInfo(e.target.parentElement.querySelector('h1').innerHTML)
      
      }
    }); */
    function nextSlide(){
      setCurrent(current === data.images.length - 1 ? 0 : current + 1)
        
      
    }
    function prevSlide(){
      setCurrent(current === 0 ? data.images.length -1 : current -1)
        
      
    }
    function handleClick(e){
     setInfo(e.target.parentElement.querySelector('h1').innerHTML)
    } 
    function handleSrc(e){
      console.log(e.target.src)
      setSrc(e.target.src)
    }
   // let length = data.images.length
  console.log(dataTwo, current)
    return (
        <> 
            <InfoContainer style={{display: !twenty ? 'none': 'flex'}}>
              <Content>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias aliquid maiores dicta cupiditate dolorem aliquam placeat possimus magni deserunt quia.
                </p>
                <button onClick={()=> setTwenty(false)}>Close</button>
              </Content>
            </InfoContainer>
        
        <Navbar />
        
      <Container>
     <Back className='btn' onClick={()=>history.push('/')}>Back</Back>
       <section className='slider'>
       
        <ArrowLeftOutlined className='left-arrow'  onClick={prevSlide}/>

        <ArrowRightOutlined className='right-arrow' onClick={nextSlide}/>
          {!loading ?
            data.images.map((src, index)=>{
               return(
                 <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (
                     <img className='image' onClick={handleSrc} src={src}/>
                  )}
                
                 </div>

               )    
            }): 'loading...'}
         
        </section>  
      
        <InfoDiv>
            <h1 className ='title'>{!loading ? data.title: 'loading...'}</h1>
            <h1 className='price'>{!loading ? data.price: 'loading...'}</h1>
            
            <div className='buttons-container' /* style={{display: 'flex', flexDirection: 'row', width: '30%',  marginLeft: '35% ', alignItems:'center' }} */>
            <button className='but' /* style={{marginBottom: '3%', }} */ onClick={()=> setContact(true)} className="btn btn-outline-primary">CONTACT TO PURCHASE</button>
 
            <button className='but' /* style={{marginBottom: '3%', }} */  onClick={()=>history.push('/trade-in')} className="btn btn-outline-primary">TRADE IN</button>
            <button className='but' /* style={{marginBottom: '3%', }} */ className="btn btn-outline-primary" onClick={()=> setToggle(true)}>See Details</button>
            <Paypal amount = {!loading ? data.price: 'loading...'}/>
           </div>
            <InfoContainer style={{display: !contact ? 'none': 'flex'}} >
            <Content>
            <h3>Phone Number:</h3>
            <h3>Email:</h3>
            <li><strong><button className = 'btn' onClick={()=> setContact(false)}>close</button></strong></li>   
            </Content>
            </InfoContainer>
            <InfoContainer style={{display: !toggle ? 'none': 'flex'}}>
             
                <Content>
               
                <ul style={{paddingTop: '100px'}}> 
                <li><strong>Brand</strong>: {data.brand }</li>
                <li><strong>Model</strong>: {data.model }</li>
                <li><strong>Refference Number</strong>: {data.ref }</li>
                <li><strong>Serial Number</strong>: {data.serialNum }</li>
                <li><strong>Gender</strong>: {data.gender }</li>
                <li><strong>Metal</strong>: {data.metal }</li>
                <li><strong>Case Size</strong>: {data.caseSize }</li>
                <li><strong>Wrist Size</strong>: {data.wristSize }</li>
                <li><strong>Movement</strong>: {data.movement }</li>
                <li><strong>Crystal</strong>: {data.crystal }</li>
                <li><strong>Dial</strong>: {data.dial }</li>
                <li><strong>Bezel</strong>: {data.bezel }</li>
                <li><strong>Band</strong>: {data.band }</li>
                <li><strong>Box</strong>: {data.box }</li>
                <li><strong>Paper</strong>: {data.papers }</li>
                <li><strong>Era</strong>: {data.era }</li>
                <li><strong>Condition</strong>: {data.condition }</li>
                <li><strong>Guarantee</strong>: {data.guarentee }</li>
                <li><strong>Addtional Info</strong>: {data.info }</li>
                <li><strong><button className = 'btn' onClick={()=> setToggle(false)}>close</button></strong></li>   
                </ul>
                </Content>
            </InfoContainer>
        </InfoDiv>
      </Container>
        <ContainerTwo>
        <h3>You Might Also Like</h3>
            <div onClick={handleClick} className="suggest">
            {dataTwo.map((data)=>{
              return <CategoryItem ref={refference} item={data}/>
            })}
            </div>
          </ContainerTwo>
          <Footer/>
            
        </>
        )
    
}
