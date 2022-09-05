import React from 'react'
import styled from 'styled-components'
import { MdContacts, MdInfo } from 'react-icons/md'
import { BsWatch } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'


const Container = styled.div`
display: none; 
@media (max-width: 500px){
    display: flex;
    height: 9.5vh;
    width: 100vw;
    background-color: black; 
    position: fixed; 
    z-index: 100;
    bottom: 0;
   
}
`



const List = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex: 1;
    &:nth-child(2){
        border-left: solid 1px white;
        border-right: solid 1px white;
    }

`

export default function MobileNav() {
    const history = useHistory()

    return (
      <Container>
          <List>
              <a title='Contact'>
                   <MdContacts onClick={()=>history.push('/')} color='#BDA855' size={40}/>
              </a>
          </List>
          <List>
              <a>
                  <MdInfo onClick={()=>history.push('/about')} size={40} color='#BDA855' />
              </a>
          </List>
          <List>
              <a>
                  <BsWatch onClick={()=>history.push('/trade-in')} size={40} color='#BDA855' /> 
              </a>
          </List>
        
         
    
      </Container>

    )
}
