import React from "react";

import Netflix from "./component/Netflix";
import Amazon from "./component/Amazon";
const favSeries = 'netflix';

const FavS = ()=>{
  if(favSeries==='netflix'){
    return(
      <Netflix />
      );
  }
  else{
    return(
      <Amazon />  
      );
  }

}




function App() {
  return (
    <>
    <h1 className="">List of top 5 Netflix series</h1>    
    <FavS/>
    </>
  );
}

export default App;
