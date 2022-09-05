import React, {useState, Component} from 'react'
import { RemoveShoppingCartOutlined, Search } from '@material-ui/icons'
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import logo from '../Assets/New_Logo__Concierge.jpeg'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
    const [dropDown, SetdropDown] = useState(false)
    const history = useHistory();

    const Container = styled.div`
    height: 85px;
    background-color: black;
    top: 0;
    @media (max-width: 500px){
    display: none;
    }
    
    
`
const ListContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: black;
//position: absolute;
width: 100%;

@media (max-width: 500px){
  padding: none;
}
`

const List = styled.ul` 
display: flex;
flex-direction: row;
padding: 0;

@media (max-width: 500px){
  display: none;
}


`
const ListItem = styled.li`
justify-content: space-between;
list-style: none;
cursor: pointer;
margin-left: 20px;

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    margin-right: 20px;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;
`

const SearchContainer = styled.div`
background-color: white;
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
border-radius: 10%;
@media (max-width: 500px){
  display: none;
}
`
const Input = styled.input`
border: none;
@media (max-width: 500px){
  display: none;
}
`

const Logo = styled.div`
display: flex;
justify-content: center;


`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
@media (max-width: 500px){
   display: none;
}
`
const Center = styled.div`
flex: 1;

`

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
color: #BDA855;
`

const Text = styled.div`
color: #BDA855;
transition: 1s ease;

&:hover{
color: white;
}


`
const Dropdown = styled.button`
color: #BDA855;
font-size: 16px;
background-color: black;
cursor: pointer;
border: none;
transition: transform 1s ease, top 1s ease;

&:hover{
color: white;
}

`

const DropContainer = styled.div`
width: 200px;
position: relative;
transition: transform 1s ease, top 1s ease;
`

const DropdownList = styled.div`
transition: transform 1s ease, top 1s ease;
color: blue;
position: absolute;
transform: ${
 dropDown == true ? 'scaleY(1)': 'scaleY(0)'
};
transform-origin: top;
z-index: 3;



`

const Links = styled.button`
padding: 10px;
font-size: 1.2em;
border: none;
outline: none;
width: 200px;

&:hover{
    background-color: #BDA855;
}
`

function home(){
/*     if(document.location)
    document.location.reload() */
     if(window.location.pathname == '/' ){
        document.location.reload()
     }else{  history.push('/')}
   history.push('/')
    
}

    //console.log(dropDown)
    return (
             
            <Container >
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search for brands, models'></Input>
                        <Search style={{color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo><img src={logo} alt="Logo" style ={{width: 300}}/></Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={0} color="primary">
                        <RemoveShoppingCartOutlined />
                    </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
            <ListContainer>
                <List>
                    <ListItem onClick = {home}><Text>Home</Text></ListItem>
                    <ListItem onClick={()=> history.push('/about')}><Text>About</Text></ListItem>
                    <ListItem onClick={()=> history.push('/trade-in')}><Text>Trade in Your Watch</Text></ListItem>
                    <ListItem onClick={()=> history.push('/categories')}><Text>Watches</Text></ListItem>
                    <DropContainer><ListItem><Dropdown onClick={() => dropDown==false ? SetdropDown(true): SetdropDown(false) }>More Info</Dropdown></ListItem>
                    <DropdownList>
                        <Links>Blog</Links>
                        <Links>Warranty Info</Links>
                        <Links>Serial Guide</Links>
                        <Links>Instructions</Links>
                        <Links>Return Policy</Links>
                        <Links>Wishlist</Links>
                    </DropdownList>
                    </DropContainer>
                    
                </List>
            </ListContainer>
        </Container>
       
    )
}
