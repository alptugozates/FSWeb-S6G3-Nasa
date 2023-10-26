import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Nasa from "./nasa/nasa"
import Tarih from "./tarih";
import { dummyData } from "./dummy";
import Header from "./header";
import Footer from "./nasa/footer";
import { IconName } from "react-icons/fa";


function App() {

  const [data, setData] = useState(dummyData)
  const [tarih,setTarih] = useState(null)

useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=va1fERIr4s4wOCB6dtTdaIZ3jiCGVb2NR3y6pEWe&date="+ tarih)
  .then((response) => setData(response.data))
},[tarih])
 console.log(data)

 function dateChanger(tarih) {
  let gun = new Date(tarih);
  let gercekTarih = `${gun.getFullYear()}-${gun.getMonth()+1}-${gun.getDate()}`
    setTarih(gercekTarih);}
 
  return (
    <div className="App">
      <Header />
  <Nasa data={data} />
  <Tarih changer={dateChanger} />
  <Footer />
  

    </div>
  );
}

export default App;
