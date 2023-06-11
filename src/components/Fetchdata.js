import React,{useEffect,useState} from 'react'
import axios from 'axios'
export const Fetchdata = ({cat}) => {
    const [Data, setData] = useState('')
    const fetchData = async() => {
    await axios
    .get(
      cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=34ec9100198f47d388e85f6a6641f35f`:
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=34ec9100198f47d388e85f6a6641f35f")
    .then((res)=>setData(res.data.articles));
    };
    useEffect(() => {
      fetchData();
    }, [cat])
    
  return (
    <div className="card container my-4">
        <h3><u>TOP HEADLINES</u></h3>
        <div className=" card container d-flex my-3 justify-content-center align-items-center flex-column w-75" >
            {Data?Data.map((items,index)=>(
            <>
            <div className="container my-3 p-3 w-75" style={{boxShadow:"2px 2px 10px #ff3300",borderRadius:"10px"}}>
            <h5 className="my-2">{items.title}</h5>
            <div className="d-flex justify-content-center align-items-center ">
            <img src={items.urlToImage} alt="Image not found" className="img-fluid" style={{width:"100%",height:"300px",objectFit:"cover"}}></img>
            </div>
            <p className="my-1">{items.content}</p>
            <a href={items.url} target="_blank">View  More</a>
            </div>
            </>

        )):"loading"}</div>

        </div>
  )
}
