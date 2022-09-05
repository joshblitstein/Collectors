import React, { useState, Component, useEffect} from 'react'
import Navbar from '../components/Navbar'
import Catolog from '../components/Catolog'
import Footer from '../components/footer/Footer'
import styled from 'styled-components'
import Paginate from '../components/Paginate'
import { collection, onSnapshot, doc, getDocs, query, where, orderBy, limit } from 'firebase/firestore'
import db from  '../firebase.js'  
import ReactPaginate from 'react-paginate';
import '../components/Paginate.scss'
import '../components/list.scss'
import Checkout from '../components/Checkout'
import { useHistory } from 'react-router-dom'
import $ from 'jquery'


const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 50px;
background-color: green;

`

const ItemContainer = styled.div`
display: flex;
flex-direction: row;
`

const CatTitle = styled.h1`
margin-top:3%;
margin-bottom:3%;

`

const SlideContainer = styled.div`
` 
const Input = styled.input`
`


export default function Collections() {
    const [postsPerPage, setPostsPerPage] = useState(12)
  //  const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [drop, setDrop] = useState(false)
   // const [metal, setMetal] = useState(null)
   /*  const [stainless, setStainless] = useState([])
    const [yellow, setYellow] = useState([])
    const [titanium, setTitanium] = useState([])
    const [leather, setLeather] = useState([]) */
    const [min, setMin] = useState([])
    const [max, setMax] = useState([])
    const [val, setVal] = useState(0)
    const [valSet, setValSet] = useState(false)
  /*   const [brandOn, setBrandOn] = useState(false)
    const [brandFilter, setBrandFilter] = useState('')
    const [caseFilter, setCaseFilter] = useState('')
    const [caseOn, setCaseOn] = useState(false) */
   // const [toggle, setToggle] = useState(false)
    const [info, setInfo] = useState(false)
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
   // const [info, setInfo] = useState('')
    const [allData, setAllData] = useState([])
    

    const history = useHistory();

    function handleActive(e){
      
   if(e.target.className == 'list-group-item'){
      for(let i =0; i < e.target.parentElement.children.length; i++){
        e.target.parentElement.children[i].className = 'list-group-item'
      } 
      e.target.className = 'list-group-item active'
      if(e.target.classList == 'list-group-item active'){
      if(e.target.children[0].style.display == 'none'){
      e.target.children[0].style.display = 'flex'
      e.target.children[0].classList.remove('active')

      }else if(e.target.children[0].style.display == 'flex'){
        e.target.children[0].style.display = 'none'
      }
    }} else if(e.target.className == 'list-group-item active'){
      e.target.className = 'list-group-item'
      e.target.children[0].style.display = 'none'
    }
    }


    async function getData() {     
      
     
        let arr = []                        
        let q = query(collection(db, "Data"), orderBy('order'));
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
         setData(arr)
         setAllData(arr.reverse())
       
        //localStorage.setItem('watches', arr) 
    

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
  




        //-------------------------------------------------------
        useEffect(() => {
          getData();
          getFilters();          
          
        }, [metal, brand, caseSize]); 
        //-------------------------------------------------------

        function handlePageClick(e){
            //setPage(page+1)
           setPage(e.selected +1)
            //console.log(document.querySelector('li.page-item.active'))
        }

        function handleRange(e){
          setVal(e.target.value)
        }

        function handleRangeClick(){
          if(valSet == false){
          setValSet(true)
          }else(setValSet(false))
        }
      /* 
        function handleBrandClick(e){
          if(brandOn == false){
            setBrandOn(true)
          }else{setBrandOn(false)}
          console.log(e.target.innerHTML)
          setBrandFilter(e.target.innerHTML)
        }
        function handleCaseClick(e){
          if(caseOn == false){
            setCaseOn(true)
          }else{setCaseOn(false)}
          console.log(e.target.innerHTML)
          setCaseFilter(e.target.innerHTML)
        }
     
     
    

       function findDisplay(length){
         if(length > 0){
           return 'inherit'
         }else return 'none';
       }  */
       function handleFilter(e){
        console.log(e.target.innerHTML)
        let newArr = []
        let i =0;
        while( i< allData.length){
            if(allData[i].brand.replace(/ *\([^)]*\) */g, "").replace(/\s+$/, '') /*  || allData[i].caseSize || allData[i].metal */  == e.target.innerHTML){
                newArr.push(allData[i])
                console.log(allData[i])
            }
            if( allData[i].caseSize  == e.target.innerHTML){
                newArr.push(allData[i])
                console.log(allData[i])
            }
            if( allData[i].metal  == e.target.innerHTML){
                newArr.push(allData[i])
                console.log(allData[i])
            }
            i++
            console.log(i)
        }
      
        setData(newArr)
        console.log(newArr)
        setModal(false)
        //reset data set modal off 
    }
       
       function handleDiv(e){
         console.log(e.target.parentElement.children.length)
         if(e.target.parentElement.children.length == 3){
        setInfo(e.target.parentElement.querySelector('h1').innerHTML)
         setToggle(true)
         }
       }
    
    const startIndex = (page - 1) * postsPerPage
    const currentData = data.slice(startIndex, startIndex+postsPerPage)
    return (
      <>
      
  { !toggle ?
      <div className ='contain' onClick={handleDiv}>
            <Navbar />
            <CatTitle>Catolog</CatTitle>
            <Catolog currentData={currentData} />
           {/*  <div className ='filterList'>
              <h4 style={{display:!metal ? 'none': 'inherit'}}>x {metal}</h4>
              <h4 style={{display:!caseOn ? 'none': 'inherit'}}>x {caseFilter}</h4>
              <h4 style={{display:!brandOn ? 'none': 'inherit'}}>x {brandFilter}</h4>
               
            </div> */}
            <ItemContainer>
        <ul onClick={handleActive} style ={{zIndex:'100'}}className= 'd-flex justify-content-center'>
     {/*    <li  className='list-group-item'>
          Gender
          <div style={{display:'none'}} clasName='dropDown' >
            <ul >
              <li className='filters' onClick={()=>setMetal('Stainless')}>Male</li>
              <li onClick={handleState}>Female</li>

            </ul>
          </div> 
        </li>  */}
       
     {/*    <li className='list-group-item'>
          Dial Color
          <div style={{display:'none'}} clasName='dropDown'>
          <ul >
              <li className='filters' onClick={()=>setMetal('Stainless')}>Male</li>
              <li onClick={handleState}>Female</li>

            </ul>
            </div> 
        </li> */}
          
        <li style={{color:'white'}} className='list-group-item'> 
          Price
          <div style={{display:'none'}} clasName='dropDown'>
          <SlideContainer> 
            <h7>${min}</h7>
          <Input onChange={handleRange} type='range' min={min} max={max} value={val} className='slider'/>
            <h7>${max}</h7>
            <h6>${val}</h6>
            <button onClick={handleRangeClick}>Apply</button>
         </SlideContainer>
    
            </div> 
        </li>
        <li className='list-group-item'>
       {/*    Brand
          <div style={{display:'none'}} clasName='dropDown'> */}
         
          {!brand ?<button onClick={()=>setBrand(true)} className='btn btn-primary'>Brand</button>:
            <div>
                <ul>
                <h6 style={{marginRight:'100%'}} onClick={()=>setBrand(false)}>close</h6>
                    {brands.map((brand)=>(
                        <li style={{color:'white'}} className='filters' onClick={handleFilter}>{brand}</li> 
                    ))}
                </ul>
            </div>
        }

         
         {/*    </div>  */}
        </li>
        <li className='list-group-item'>
        {!metal ?<button onClick={()=>setMetal(true)} className='btn btn-primary'>Metal</button>:
            <div>
                <ul>
                  <h6 style={{marginRight:'100%'}} onClick={()=>setMetal(false)}>close</h6>
                    {metals.map((brand)=>(
                        <li style={{color:'white'}} onClick={handleFilter} className='filters'>{brand}</li> 
                    ))}
                </ul>
            </div>
        }
        </li>
        <li className='list-group-item'>
        {!caseSize ?<button onClick={()=>setCaseSize(true)} style={{height:'100%', width:'100%'}} className='btn btn-primary'>Case Size</button>:
            <div>
                <ul>
                <h6 style={{marginRight:'100%'}} onClick={()=>setCaseSize(false)}>close</h6>
                    {cases.map((size)=>(
                        <li style={{color:'white'}} onClick={handleFilter} className='filters' >{size}</li> 
                    ))}
                </ul>
            </div>
        }
        </li>
        </ul>
     </ItemContainer>
<nav className ='nav'>
<ReactPaginate
  previousLabel={"previous"}
  nextLabel={"next"}
  breakLabel={"..."}
  pageCount={Math.ceil(data.length/postsPerPage)}
  marginPagesDisplayed={2}
  pageRangeDisplayed={3}
  onPageChange={handlePageClick}
  containerClassName={"pagination justify-content-center"}
  pageClassName={"page-item"}
  pageLinkClassName={"page-link"}
  previousClassName={"page-item"}
  previousLinkClassName={"page-link"}
  nextClassName={"page-item"}
  nextLinkClassName={"page-link"}
  breakClassName={"page-item"}
  breakLinkClassName={"page-link"}
  activeClassName={"active"}
/>
</nav>
        
        <Footer />
         
        </div>
        :
        <div>
         
           <Checkout title={info}/> 
        </div>
        
        }
        </>
    )
}
