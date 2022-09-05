import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined, Check } from '@material-ui/icons'
import img1 from '../Assets/1.jpg'
import {sliderItems} from '../data.js'
import { useState, useEffect } from 'react'
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit, SnapshotMetadata } from 'firebase/firestore'
import db from  '../firebase.js'  
import Checkout from './Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import $ from 'jquery'
import './mobile.scss'





const Container = styled.div`
width: 100%;
height: calc(100vh - 33px);
display: flex;
background-color: white;
position: relative;
margin-top: 33px;
@media (max-width: 500px){
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    height: 80%;
}
//background-color: violet;

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
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
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
const MobileArrow = styled.div`
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
left: ${props => props.direction === 'left' && '10px'};
right: ${props => props.direction === 'right' && '10px'};
opacity: 0.5;
margin: auto;
transition: 1s ease;
&:hover{
opacity: 1;
}
z-index: 2;

`

const Wrapper = styled.div`
    height: 100%;
    margin: auto;
    display: flex;
    transition: all 1.5s;
  /*   justify-content: center;
    align-items: center; */
    transform: translateX(${props=> props.slideIndex * -100}vw);
  

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
background-color: ${props =>props.bg} ;
@media (max-width: 500px){
    flex-direction: column;
    scroll-snap-align: start;
    body::-webkit-scrollbar {
        display: none;

    }
    height: 100%;


}

`
const ImgContainer = styled.div`
height: 100%;
flex: 1; 
display: flex;
align-items: center;
//margin-left: 20%;
@media (max-width: 500px){
    justify-content: center;

}


`

const Image = styled.img`
height: 70%;
margin-left: 30%;
@media (max-width: 500px){
   margin-left: 0%;
}

`


const InfoContainer = styled.div`
flex: 1;
padding: 50px;
margin-left: 15%;

@media (max-width: 500px){
    padding: 25px;
    margin-left: 0%;
    justify-content: center;
    align-items: center;
}
`

const Title = styled.h1`
font-size: 40px;
@media (max-width: 500px){
    font-size: 20px;

}
`

const Shop = styled.h1`
display: none;
@media (max-width: 500px){
    display: flex;
    
}
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
@media (max-width: 500px){
 margin: 15px;

}
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
color: black;
cursor: pointer;
@media (max-width: 500px){
 display: none;

}
`
const MobileButton = styled.button`
display: none;
@media (max-width: 500px){
 display: flex;
//left: 50%;
margin-left: 40%;
margin-top: 116px;
opacity: 0.5;
position: fixed;
//margin: 144px;
margin-top: 490px;

&:hover{
    opacity: 1;
}
}
`
const MobileModal = styled.div`
    margin: 60px;
    height: 60vh;
    width: 70vw;
  //  background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
   // margin: 3px;
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    const [data, setData] = useState([])
    const [toggle, setToggle] = useState(false)
    const [modal, setModal] = useState(false)
    const [brand, setBrand] = useState(false)
    const [caseSize, setCaseSize] = useState(false)
    const [metal, setMetal] = useState(false)
    const [brands, setBrands] = useState([])
    const [metals, setMetals] = useState([])
    const [cases, setCases] = useState([])
    const [filter, setFilter] = useState('')
    const [info, setInfo] = useState('')
    const [allData, setAllData] = useState([])

    function handleClick(direction) {
        if(direction == "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1: 0)
        }
    };
    function handleMobileClick(direction) {
        if(direction == 'left' && slideIndex >=0){
            setSlideIndex(slideIndex-1)
        }else{
            setSlideIndex(slideIndex + 1)
        }
    };
    async function getData(){
        let arr = []                        
        let q = query(collection(db, "Data"), orderBy('order', 'desc'));
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach(doc => {
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
          arr.push(data) 
        })
         setData(arr.reverse())
         setAllData(arr.reverse())
       
        //localStorage.setItem('watches', arr) 
    }
 
    const history = useHistory();
    
    function nav(e){
        history.push('/checkout')
        localStorage.setItem('data',  e.target.parentElement.querySelector('h1').innerHTML)
     
    }
    function picNav(e){
        history.push('/checkout')
      //  console.log(e.target.parentElement.parentElement.childNodes[1].querySelector('h1').innerHTML)
        localStorage.setItem('data', e.target.parentElement.parentElement.childNodes[1].querySelector('h1').innerHTML)
     
    }
    function getFilters(){
        let brandArr = []
        let metalArr = []
        let caseArr = []
        for(let i = 0; i < data.length; i++){
            brandArr.push(data[i].brand.replace(/ *\([^)]*\) */g, "").replace(/\s+$/, ''))
            metalArr.push(data[i].metal)
            caseArr.push(data[i].caseSize)
        }
        setBrands([... new Set(brandArr)])
        setMetals([... new Set(metalArr)])
        setCases([... new Set(caseArr)])
    }

    useEffect(() => {
        getData() 
        getFilters()
       // console.log(info)
    
       // 
           
        
    }, [brand, metal, caseSize])
  
  // getFilters()
    //console.log(brands,)
    function handleFilter(e){
        console.log(e.target.innerHTML)
        let newArr = []
        let i =0;
        while( i< allData.length){
            if(allData[i].brand.replace(/ *\([^)]*\) */g, "").replace(/\s+$/, '')/*  || data[i].caseSize || data[i].metal */ == e.target.innerHTML){
                newArr.push(allData[i])
                console.log(allData[i])
            }
            i++
            console.log(i)
        }
      
        setData(newArr)
        console.log(newArr)
        setModal(false)
        setSlideIndex(0)
        //reset data set modal off 
    }
  
    return (
      <>
{ !modal ?
       <Container>
           <Arrow direction = 'left' onClick={()=>handleClick('left')}>
                <ArrowLeftOutlined/>
           </Arrow>
           <MobileArrow direction = 'left' onClick={()=>handleMobileClick('left')}>
                <ArrowLeftOutlined/>
           </MobileArrow>
           <Wrapper slideIndex ={slideIndex}>
               {data.map((item) =>(
                    <Slide bg ='white'>
                    <ImgContainer>
                        <Image onClick={picNav} src={item.images[0]}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.price}</Desc>
                        <Button className='btn btn-primary' onClick={nav} >Show</Button>
                       
                    </InfoContainer>
                    </Slide>
               ))}
              
              
           </Wrapper> 
           <Arrow direction = 'right' onClick={()=>handleClick('right')}>
                <ArrowRightOutlined/>
           </Arrow>
           <MobileArrow direction = 'right' onClick={()=>handleMobileClick('right')}>
                <ArrowRightOutlined/>
           </MobileArrow>
           <MobileButton onClick={()=>setModal(true)} className= 'btn btn-primary'>Filter</MobileButton>
       </Container> :
      <MobileModal>
        {!brand ?<button  style={{margin: '5px'}} onClick={()=>setBrand(true)} className='btn btn-primary'>Brand</button>:
            <div>
                <ul>
                <h6 style={{marginRight:'100%'}} onClick={()=>setBrand(false)}>close</h6>
                    {brands.map((brand)=>(
                        <li onClick={handleFilter}>{brand}</li> 
                    ))}
                </ul>
            </div>
        }
        {!metal ?<button style={{margin: '5px'}}onClick={()=>setMetal(true)} className='btn btn-primary'>Metal</button>:
            <div>
                <ul>
                <h6 style={{marginRight:'100%'}} onClick={()=>setMetal(false)}>close</h6>
                    {metals.map((brand)=>(
                        <li onClick={handleFilter}>{brand}</li> 
                    ))}
                </ul>
            </div>
        }
    
        {!caseSize ?<button  style={{margin: '5px'}} onClick={()=>setCaseSize(true)} className='btn btn-primary'>Case Size</button>:
            <div>
                <ul>
                <h6 style={{marginRight:'100%'}} onClick={()=>setCaseSize(false)}>close</h6>
                    {cases.map((size)=>(
                        <li onClick={handleFilter}>{size}</li> 
                    ))}
                </ul>

            </div>
        }
      </MobileModal>
     }
        <Router>
       <Switch>
      
     
       <Route exact path='/checkout' render={(routerProps) => <Checkout {...routerProps} title2={info}/>} />
      </Switch>
      </Router> 
           
      
       </>
    )
}
