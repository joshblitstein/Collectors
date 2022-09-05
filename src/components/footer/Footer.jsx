import React from 'react'
import styled from 'styled-components'
import './Footer.scss'
import logo from '../../Assets/secondaryLogo.jpg'


const Container = styled.div`
//position: relative;
 
 @media (max-width: 500px){
    display: none;
    }
`

export default function Footer() {
    return (<Container>
        <footer class="footer">
<div class="l-footer">
<h1>
<img src={logo} alt=""/></h1>
{/* <p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis? Vitae nemo, optio maiores numquam quis recusandae.</p> */}
</div>
<ul class="r-footer">
<li>
  <h2>
Social</h2>
<ul class="box">
<li><a href="#">Facebook</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">Instagram</a></li>
</ul>
</li>
<li class="features">
  <h2>
Information</h2>
<strong><h4>Smithtown</h4></strong>
<h6>87 West Main St,</h6>
<h6>Smithtown, NY 11787</h6>
<h6>Watches: 888-505-0996</h6>
<h6>Jewelry & Coins: 631-656-6990</h6>
<h6>smithtown@collectors1946.com</h6>
{/* <ul class="box h-box">
<li><a href="#">Blog</a></li>
<li><a href="#">Certifications</a></li>
<li><a href="#">Customer Service</a></li>
</ul> */}
</li>
{/* <li>
  <h2>
Legal</h2>
<ul class="box">
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Use</a></li>
<li><a href="#">Contract</a></li>
</ul>
</li> */}
</ul>
<div class="b-footer">
<p>
All rights reserved by ©CompanyName 2020 </p>
</div>
</footer>
</Container>
    )
}
