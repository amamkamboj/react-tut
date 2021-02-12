import React, { useState } from "react";

import Netflix from "./component/Netflix";
import Amazon from "./component/Amazon";
const favSeries = 'amazon';



const App = ()=>{

  const state = useState();
  const newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime]=useState(newTime);
  const [count,setCount]= useState(0);
  const purple ="yellow";
  const name="Change Bg";
  const [bg, setBg ]=useState(purple);
  const [setName,newName]=useState(name);
  console.log(state);
  
  const IncNum= () => {
    setCount(count+1);
    console.log("clicked");
  
  }

  const DecNum = ()=>{
    setCount(count-1);
  }

  const getCtime= ()=>{
    // update 
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  }
  const UpdateBg = ()=>{
    let newBg ="red";
    setBg(newBg);
    let upName="New Bg 👍";
    newName(upName);
  }
  const BgBack =()=>{
    setBg(purple);
   
    newName("Ayyo!! 😠");
  }

  return (
    <>
    <div style={{backgroundColor : bg}}>
    <h1 className="">List of top 5 Netflix series </h1>    
    {favSeries ==='netflix' ? <Netflix /> : <Amazon />}
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    <button onClick={DecNum}>Click Me</button>
    <br></br>
    <h1>{ctime}</h1>
    <button onClick={getCtime}>Get Time</button>
    <br/>
    <button onClick={UpdateBg} onDoubleClick={BgBack}>{setName}</button>
    </div>
    </>
  );
}

export default App;
