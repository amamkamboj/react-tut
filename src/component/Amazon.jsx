import React from "react";
import Cards from './Cards';
import Sdata from "../Sdata";
const Amazon = ()=> {
    return(
<Cards
        key={Sdata[3].id}
       imgSrc={Sdata[3].imgSrc} 
          title={Sdata[3].title} 
          sname={Sdata[3].sname} 
          links={Sdata[3].links} />  
          );
}

export default Amazon;