import React, { useRef } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './footer/Footer'
import emailjs from 'emailjs-com';
import { useHistory } from 'react-router-dom'


const PageCont = styled.div`
  // position: relative;
  display: flex;
  flex-direction: column;
   
`

const FormContainer = styled.div`
    height: 100vh;

    //width: 100vw;
    display: flex;
    justify-content: center;
    
    align-items: center;
    flex-direction: column;
   // position: absolute;
   margin-bottom: 70%;
`
const FormContainerChild = styled.div`
width: 100%;
max-width: 700px;
height: 80%;
margin: 0 auto;
margin-bottom: 20px;
position: absolute;
`
const Title = styled.div`
    font-size: 25px;
    
    position: relative;
    width: 100%;
    
    &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 100%;
        background: #BDA855;
    }
`
const TitleFaq = styled.h1`
    font-size: 25px;
    
   // position: absolute;
    left:0;
    width: 100%;
    
 /*    &::before{
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 100%;
        background: #BDA855;
    } */
`


const Form = styled.form`
display: flex;
align-items: center;
flex-direction: column;

`

const User = styled.div`
display: flex;
flex-wrap: wrap-reverse;
justify-content: space-between;
flex-direction: column;
`
const inputBox = styled.div`
//width: calc(100% / 2-20px);
margin: 20px 0 12px 0  ;
`

const Details = styled.span`
font-weight: 500;
margin-bottom: 5px;
`
const Inpuut = styled.input`
height: 45px;
width: 100%;
@media (max-width: 500px){
width: 91%;
   
}
`
const Button = styled.button`
width: 100px;
height: 45px;
margin-top: 4px;
`
const Back = styled.button`
width: 50px;
height: 25px;
margin-top: 4px;
left: 0;
position: absolute;
z-index: 100;
`
const Paragraph = styled.p`
   

  @media (max-width: 500px){
   display:none;
   
}
`
const Banner = styled.div`
   // background: url('https://cdn.shopify.com/s/files/1/1133/1936/t/30/assets/heading-bg.jpg'); 
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://cdn.shopify.com/s/files/1/1133/1936/t/30/assets/heading-bg.jpg');
    background-size: cover;
    background-position: center center;
    //background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://cdn.shopify.com/s/files/1/1133/1936/t/30/assets/heading-bg.jpg');
    position: relative;
    height: 150px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);;
    //opacity: 0.5;
    margin: 10px;
    justify-content: center;
    
  @media (max-width: 500px){
   display:none;
   
}
`
const Faq = styled.div`
    background-color: white;
    height: 200px;
    width: 100%;
    position: relative;
    margin-top:10px;
    display: flex;
    flex-direction: column;
 
@media (max-width: 500px){
   display:none;
   
}
`
const Break = styled.span`
    display: block;

`


export default function Trade() {
    const form = useRef();
    const history = useHistory()

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_3xuffzj', 'template_fieavx6', form.current, 'user_BJfhgEXHy6xMbNlmJgiFE')
          .then((result) => {
              console.log(result.text);
          }, (error) => { 
              console.log(error.text);
          });
    }

 

    return (
       
        <>
       <PageCont>
        <Navbar />
       <FormContainer>
           <FormContainerChild>
            <Back className='btn' onClick={()=> history.push('/')} /* className='btn btn-primary' */>Back</Back>
           <Title>Trade In or Sell you Watch</Title>
           <Banner>
               <Paragraph>
                   <strong style={{color:'white'}}>The Best Way to Sell or Trade Your Luxury Items</strong>
               </Paragraph>
           </Banner>
           <Paragraph>
           As one of the country’s largest gold, silver, coin, diamond, & watch dealer, Collectors offers the highest values for your luxury goods.

We specialize in fine watches & jewelry, such as Rolex, Audemars Piguet, Patek Philippe, Panerai, Omega, Richard Mille, FP Journe, Hublot, Cartier, Tiffany & Co, IWC, Breitling, Van Cleef, David Yurman, & many more!

After submitting a request, our knowledgeable appraiser will evaluate your items & contact you with a purchase and/or trade offer.       

<Break><strong>We will make selling or trading your jewelry, coins, diamonds, or watches a hassle-free experience</strong></Break>
           </Paragraph>
           <Form ref={form} onSubmit={sendEmail}>
                <User>
                    <inputBox>
                        <Details>Name</Details>
                        <Inpuut name='name' placeholder='Enter Your Name'/>
                    </inputBox>
                    <inputBox>
                        <Details>Email</Details>
                        <Inpuut name='email' placeholder='Enter Your Email'/>
                    </inputBox>
                    <inputBox>
                        <Details>Phone Number</Details>
                        <Inpuut placeholder='Enter Your Phone Number'/>
                    </inputBox>
                    <inputBox>
                        <Details>Item Brand/Model</Details>
                        <Inpuut placeholder='Enter Item Brand'/>
                    </inputBox>
                    <inputBox>
                        <Details>Box/Papers</Details>
                        <Inpuut placeholder='Enter Box/Papers'/>
                    </inputBox>
                    <inputBox>
                        <Details>Sell or Trade</Details>
                        <Inpuut placeholder='Enter Your Name'/>
                    </inputBox>
                    <inputBox>
                        <Details>Asking Price '(USD)'</Details>
                        <Inpuut placeholder='Ex $5,000'/>
                    </inputBox>
                    <inputBox>
                        <Details>Upload Images</Details>
                        <Inpuut name='file' type='file' />
                    </inputBox>
                    <inputBox>
                        <Details>What Items do you want to trade for?</Details>
                        <Inpuut />
                    </inputBox>
                </User>
                <Button className='btn btn-primary'>Submit</Button>
           </Form>
            <Faq>
                <TitleFaq>
                    FAQs
                </TitleFaq>
                <Paragraph>
               <Break><strong>HOW CAN I CONTACT YOU WITH QUESTIONS?</strong></Break>

We can be contacted by phone at (631)656-6990 or by email at smithtown@collectors1946.com

<Break><strong>HOW OFTEN IS THE INITIAL OFFER THE FINAL PRICE?</strong></Break>

Most of the time our initial offers are accurate. In the the unlikely scenario that the watch needs servicing or the condition is different than it was described to be in will we adjust the final offer or refuse to purchase the item. If our final offer changes from the initial offer for any reason once it is in our hands and you decide not to accept it, we will gladly ship your watch back to you fully insured.

<Break><strong>WHAT IF MY WATCH IS DAMAGED OR LOST DURING SHIPPING?</strong></Break>

A shipment being lost or damaged is extremely unlikely. However, if it were to occur, we insure every watch to 100% of the value of the quote we provided you. Rest easy, our shipping process is safe, quick and secure.

<Break><strong>SHOULD I SERVICE MY WATCH BEFORE I SEND IT IN TO YOU?</strong></Break>

No, it’s not necessary. We will verify that your watch is running well upon arrival. Should the watch need servicing, it will be more cost effective for us to complete the servicing and adjust our offer accordingly.
                </Paragraph>
            </Faq>
           </FormContainerChild>
       </FormContainer>
      
       <Footer />

       </PageCont>
        </>
    )
}
