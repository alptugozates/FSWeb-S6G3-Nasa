import React from "react";
import "./nasa.css"


export default function Nasa(props) {
const {data,dateChanger} = props;
return (

<>
    <h1 className="baslik">{data.title}</h1>
    <div className="main">
        <img className="img" src={data.url} alt={data.title}/>
        <div className="paragraf">
            <p className="aciklama">{data.explanation}</p>
            <p className="copyright">{data.copyright}</p>
        </div>
    </div>
    
    




</> 


)



}