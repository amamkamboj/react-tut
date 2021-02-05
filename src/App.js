import React from "react";
import Cards from './component/Cards';
import Sdata from "./Sdata";
const ncard= (val,ind,arr)=>{
  console.log(val);
  return(
  <Cards
    key={val.id}
   imgSrc={val.imgSrc} 
      title={val.title} 
      sname={val.sname} 
      links={val.links} />
  
  );
}

function App() {
  return (
    <>
    <h1 className="">List of top 5 Netflix series</h1>    
    {Sdata.map( ncard)}
    </>
  );
}

export default App;
