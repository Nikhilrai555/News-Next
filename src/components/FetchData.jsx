import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
const FetchData = ({cat}) => {
    const [Dta, setDta] = useState("")
    const Fetchd =async ()=>{
    await axios.get(
        cat?`http://localhost:3077/${cat}`:`http://localhost:3077/collection`)
    .then((res)=>setDta(res.data))
    }
    useEffect(()=>{
        Fetchd()
    },[cat])
  return (
    <div className =" container my-4">
        <h1>HEADLINES</h1>
       <div className="container my-3 d-flex justify-content-center align-iems-center flex-column">{Dta?Dta.map((items)=><>
       <div className="container my-3" key={items._id}>
       <h5>{items.title}</h5>
       <img src={items.imgLink} alt="/" className="img-fluid" style={{width:"200px",height:"300px ",objectFit:"cover"}}/>
       <p>{items.desc}</p>
       <a href ={items.link} target="blank">view more</a>
       </div>
       </>):"Loading"}</div>

    </div>
  )
}
export default FetchData