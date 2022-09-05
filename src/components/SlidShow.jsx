import React, {useState} from 'react'

export default function SlidShow() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState('')
    const [toggle, setToggle] = useState(false)
    const [twenty, setTwenty] = useState(false)
    const [src, setSrc] = useState('')
   const history = useHistory()

   
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
    return (
        <>
            
        </>
    )
}
