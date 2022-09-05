import React, { useState, useRef, useEffect } from "react";
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'


const Success = styled.div`
display: flex; /* Hidden by default */
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

const Content = styled.h3`
  margin-top: 10%auto;
  background-color: #fefefe;
  margin: 1% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 30%; /* Could be more or less, depending on screen size */
 
`


export default function Paypal({amount}) {
  const paypal = useRef();
  const [success, setSuccess] = useState(false)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(null)
  const history = useHistory();

  let myStorage = window.localStorage;

   function getInt(string){
    let newString =  string.replace(/^\D+/g, '').replace('USD', '')
    return parseFloat(newString.replace(',', ''))
  } 
  console.log(getInt(amount))
  localStorage.setItem('price', getInt(amount));
  let percent = Math.floor((4/100) *localStorage.getItem('price'))
  localStorage.setItem('markup',  percent += getInt(localStorage.getItem('price')))
    function handlePrice(amount){
       
     if(amount < 5000){
                        return amount
                    }else if(amount > 5000 && amount < 25000){
                      return   localStorage.getItem('markup')
                    }else if(amount > 25000){
                        return 500
                    }
  }
 console.log( percent += getInt(localStorage.getItem('price')) )
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: 'title',
                amount: {
                  currency_code: "USD",
                  value: handlePrice(localStorage.getItem('price'))
                  
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          setSuccess(true)
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
       setTimeout(() => {
       setPrice(amount)    
    /*         setPrice(getInt(document.querySelector('h1.price').innerHTML))
            setTitle(document.querySelector('h1').innerHTML) */
       }, 1000);
     
       
  }, []);
//console.log(price, title)
  return (
      <>{!success?
    <div style ={{zIndex: '0'}}>
      <div ref={paypal}></div>
    </div>:

   <Success>
       <Content>
           Success!
           <button onClick={()=> history.push('/')}> Back Home</button>
           <button onClick={()=> history.push('/categories')}> Keep Shopping</button>
       </Content>
   </Success>
}
    </>
  );
}