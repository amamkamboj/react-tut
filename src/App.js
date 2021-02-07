import React from "react";

import Netflix from "./component/Netflix";
import Amazon from "./component/Amazon";
const favSeries = 'amazon';


function App() {
  return (
    <>
    <h1 className="">List of top 5 Netflix series</h1>    
    {favSeries ==='netflix' ? <Netflix /> : <Amazon />}
    </>
  );
}

export default App;
