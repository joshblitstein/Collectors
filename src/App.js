import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/Navbar';
import Home from './containers/home/Home';
import db from  './firebase.js' 
import Collections from './containers/Collections';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import $ from 'jquery'
import { useHistory } from 'react-router-dom'
import CheckoutCopy from './components/CheckoutCopy'
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit, } from 'firebase/firestore'
import About from './components/About'
import Trade from './components/Trade'


function App() { 
  const [info, setInfo] = useState('')
  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState([])
  
 
  /* $('body').click(function(e){
console.log('clicked', e.target)
if(e.target.innerHTML == !'Home')
    {   if(document.querySelector('button.sc-dQoVA')){
    if(e.target.innerHTML == document.querySelector('button.sc-dQoVA').innerHTML || e.target.parentElement.querySelector('h1').innerHTML == e.target.parentElement.querySelector('h1').innerHTML ){
    
    console.log(e.target);
    setInfo(e.target.parentElement.querySelector('h1').innerHTML)
    setToggle(true)
    }
  }}
  }); */
  async function getData(){
    let currenArr = []
      let q = query(collection(db, "wacthes"), where('title', '==',    info))
      const current = await getDocs(q)
      current.forEach(doc => {
        currenArr.push(doc.data()) 
      })
      setData(currenArr)
      
     
      
}
  
 useEffect(() => {
  //handleClick()
  getData()
 }, [info])
 

 console.log(info, data)
  return (
    <div className="App">
 
      {!toggle ? 
      <Router>
       <Switch>
       <Route exact path='/' render={(routerProps) => <Home />} />
       <Route exact path='/categories' render={(routerProps) => <Collections />} />
       <Route exact path='/checkout' render={(routerProps) => <Checkout title={info}/>} />
       <Route exact path='/about' render={(routerProps) => <About />} />
       <Route exact path='/trade-in' render={(routerProps) => <Trade />} />
      </Switch>
      </Router>:
      <div>
       {/*  <Router>
        <CheckoutCopy stuff={data}/>
        </Router> */}
      </div>
      
      }
    </div>
  );
}

export default App;
