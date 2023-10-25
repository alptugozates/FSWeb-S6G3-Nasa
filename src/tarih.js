import React from "react";
import "./index.css"


export default function Tarih (props){
    const {changer} = props;

    return(
         <input className="tarih" type="date" onChange={(event) => changer(event.target.value)}/>
    )
}