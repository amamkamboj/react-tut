import React from "react";
import Cards from './Cards';
import Sdata from "../Sdata";
const Netflix = ()=> {
    return(
<Cards
        key={Sdata[1].id}
       imgSrc={Sdata[1].imgSrc} 
          title={Sdata[1].title} 
          sname={Sdata[1].sname} 
          links={Sdata[1].links} />  
          );
}

export default Netflix;